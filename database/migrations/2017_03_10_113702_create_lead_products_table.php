<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('lead_products', function (Blueprint $table) {

        $table->increments('id');

        $table->decimal('price',15,2)->nullable();

        $table->integer('lead_id')->unsigned()->nullable();

        $table->integer('product_id')->unsigned()->nullable();

        $table->integer('unit_id')->unsigned()->nullable();

        $table->integer('currency_id')->unsigned()->nullable();

        $table->decimal('quantity',15,2)->unsigned()->nullable();

        $table->decimal('total',15,2)->nullable();

        $table->timestamps();

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lead_products');
    }
}
