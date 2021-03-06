<?php

namespace Tests\Unit;

use App\Http\Helpers\settingsHelper;
use App\Models\User;
use Tests\TestCase;

class SettingsTest extends TestCase {

    protected $user;
    protected $company;
    protected $headers;
    protected $defaultOrderStatus = 1;

    /**
     * @group settings
     * Set Up test
     */
    public function setUp() {
        parent::setUp(); // TODO: Change the autogenerated stub

        $this->user = User::where('email', 'test@mail.com')->first();
        $this->headers = $this->headers($this->user);
    }

    /**
     * @group settings
     * Test Get List Of Settings
     */
    public function testGetListOfSettings() {
        $this->get($this->path . '/settings', $this->headers)
                ->assertSuccessful();
    }

    /**
     * @group settings
     * Test Get Company Settings By Code
     */
    public function testGetCompanySettingsByCode() {
        $response = $this->get($this->path . '/company/settings/' . 'language', $this->headers)
                          ->assertSuccessful();

        // dd($response);
    }

    /**
     * @group settings
     * Test Get User Settings By Code
     */
    public function testGetUserSettingsByCode() {
        $this->get($this->path . '/user/settings/' . 'language', $this->headers)
                ->assertSuccessful();
    }

    /**
     * @group settings
     * Test Set Settings for Company
     */
    public function testSetSettingForCompany() {

        //add test data
        \App\Models\Settings::create(['code' => 'default_order_status', 'is_system' => 0]);
        \App\Models\Settings::create(['code' => 'test_div_bg_class', 'is_system' => 0]);

        $this->post($this->path . '/company/settings', ["language" => '1'], $this->headers)
                ->assertSuccessful();


        //set default order status
        $this->post($this->path . '/company/settings', ["default_order_status" => $this->defaultOrderStatus], $this->headers)
                ->assertSuccessful();

        $this->post($this->path . '/company/settings', ["test_div_bg_class" => 'bg-yellow'], $this->headers)
                ->assertSuccessful();


        //Remove added settings
        \App\Models\Settings::where('code', 'test_div_bg_class')->delete();
        \App\Models\Settings::where('code', 'default_order_status')->delete();



    }

    /**
     * @group settings
     * Test Set Settings for User
     * Set bg-yellow
     */
    public function testSetSettingForUser() {
        $this->post($this->path . '/user/settings', ["language" => '1'], $this->headers)
                ->assertSuccessful();
        \App\Models\Settings::create(['code' => 'test_div_bg_class', 'is_system' => 0]);

        $this->post($this->path . '/user/settings', ["test_div_bg_class" => 'bg-yellow'], $this->headers)
                ->assertSuccessful();

        \App\Models\Settings::where('code', 'test_div_bg_class')->delete();
    }

    /**
     * @group settings
     * Test use settings fro Set default order status
     */
    public function testUseDefaultOrderStatusSettings() {

        \App\Models\Settings::create(['code' => 'default_order_status', 'is_system' => 0]);

        $this->get($this->path.'/company/settings/default_order_status', $this->headers)
                ->assertSuccessful();

        $company = \App\Http\Helpers\userHelper::company()->id;

        // dd($company);

        //Get setting id
        $settings = \App\Models\Settings::where('code','default_order_status')->first();

        \App\Models\CompanySettings::create(['company_id'=>$company,'setting_id'=>$settings->id,'value'=>1]);

        $defaultOrderStatus = settingsHelper::companyGet('default_order_status');

        $this->assertEquals($this->defaultOrderStatus, $defaultOrderStatus->value);

        \App\Models\Settings::where('code', 'default_order_status')->delete();
        \App\Models\CompanySettings::where(['setting_id'=>$settings->id])->delete();
    }

}
