define({ "api": [
  {
    "type": "post",
    "url": "/auth/admin/loginAs",
    "title": "Login admin as company and/or user",
    "name": "Login_admin_as_company_and_or_user",
    "description": "<p>This endpoint Logins admin as company and/or user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Admin",
    "sampleRequest": [
      {
        "url": "/backend/api/auth/admin/loginAs"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/auth/admin/logoutAs",
    "title": "retrieve back admin token , (from loginas)",
    "name": "Retrieve_back_admin_token____from_loginas_",
    "description": "<p>This endpoint retrieves back admin token , (from loginas)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Admin",
    "sampleRequest": [
      {
        "url": "/backend/api/auth/admin/logoutAs"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/auth/admin",
    "title": "Auth the admins",
    "name": "Authentificate_Admin",
    "description": "<p>This endpoint return the token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Email of admin</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>Password of admin</p>"
          }
        ]
      }
    },
    "group": "Auths",
    "sampleRequest": [
      {
        "url": "/backend/api/auth/admin"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Auth the users",
    "name": "Authentificate_User",
    "description": "<p>This endpoint return the token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "group": "Auths",
    "sampleRequest": [
      {
        "url": "/backend/api/auth"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Logout user",
    "name": "Logout_user_by_token",
    "description": "<p>Logout user by token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Auths",
    "sampleRequest": [
      {
        "url": "/backend/api/auth/logout"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "post",
    "url": "/resend/confirmation",
    "title": "Resend confirmation email for registered users",
    "name": "Resend_confirmation_email_for_registered_users",
    "description": "<p>This endpoint send confirmation email for registered users by credentials</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>of user</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>of user</p>"
          }
        ]
      }
    },
    "group": "Auths",
    "sampleRequest": [
      {
        "url": "/backend/api/resend/confirmation"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "post",
    "url": "/auth/reset",
    "title": "try to reset new password",
    "name": "Reset_password",
    "description": "<p>This endpoint resets password</p>",
    "group": "Auths",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password_confirmation",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/auth/reset"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "post",
    "url": "/auth/recovery",
    "title": "try to send reset link to email",
    "name": "Send_reset_link",
    "description": "<p>This endpoint sends reset link to email</p>",
    "group": "Auths",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/auth/recovery"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Auths"
  },
  {
    "type": "get",
    "url": "/company_filters",
    "title": "Get predefined filters for company",
    "name": "Get_list_of_predefined_filters_for_company",
    "description": "<p>This endpoint</p>",
    "sampleRequest": [
      {
        "url": "/backend/api/company_filters"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "group": "C__xampp_htdocs_back_routes_api_php",
    "groupTitle": "C__xampp_htdocs_back_routes_api_php"
  },
  {
    "type": "get",
    "url": "/predefined_filters",
    "title": "Get predefined filters for company",
    "name": "Get_list_of_predefined_filters_for_company",
    "description": "<p>This endpoint get list of predefined filters for company</p>",
    "sampleRequest": [
      {
        "url": "/backend/api/predefined_filters"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "group": "C__xampp_htdocs_back_routes_api_php",
    "groupTitle": "C__xampp_htdocs_back_routes_api_php"
  },
  {
    "type": "put",
    "url": "/product/:id",
    "title": "Update product",
    "name": "Update_product",
    "description": "<p>This endpoint update the information about product</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "price",
            "description": "<p>of product</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/product/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "group": "C__xampp_htdocs_back_routes_api_php",
    "groupTitle": "C__xampp_htdocs_back_routes_api_php"
  },
  {
    "type": "post",
    "url": "/chat/guests",
    "title": "Add new chat guests",
    "name": "Add_new_chat_guests",
    "description": "<p>This endpoint adds new chat guests</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "question",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "visitor.id",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "ChatGuest",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/guests/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatGuest"
  },
  {
    "type": "delete",
    "url": "/chat/guests/:id",
    "title": "Delete chat guestss",
    "name": "Delete_chat_guests_data",
    "description": "<p>This endpoint delete chat guestss information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat guests</p>"
          }
        ]
      }
    },
    "group": "ChatGuest",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/guests/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatGuest"
  },
  {
    "type": "get",
    "url": "/chat/guests",
    "title": "Get chat guests",
    "name": "Get_list_of_chat_guests",
    "description": "<p>This endpoint get list of chat guests</p>",
    "group": "ChatGuest",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/guests"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatGuest"
  },
  {
    "type": "put",
    "url": "/chat/guests/:id",
    "title": "Update chat guests",
    "name": "Update_chat_guests_data",
    "description": "<p>This endpoint update chat guests information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat guests</p>"
          }
        ]
      }
    },
    "group": "ChatGuest",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/guests/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatGuest"
  },
  {
    "type": "post",
    "url": "/chat/invitations",
    "title": "Add new chat invitations",
    "name": "Add_new_chat_invitations",
    "description": "<p>This endpoint adds new chat invitations</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room.id",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "ChatInvitations",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/invitations/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatInvitations"
  },
  {
    "type": "delete",
    "url": "/chat/invitations/:id",
    "title": "Delete chat invitationss",
    "name": "Delete_chat_invitations_data",
    "description": "<p>This endpoint delete chat invitationss information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat invitations</p>"
          }
        ]
      }
    },
    "group": "ChatInvitations",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/invitations/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatInvitations"
  },
  {
    "type": "get",
    "url": "/chat/invitations",
    "title": "Get chat invitations",
    "name": "Get_list_of_chat_invitations",
    "description": "<p>This endpoint get list of chat invitations</p>",
    "group": "ChatInvitations",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/invitations"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatInvitations"
  },
  {
    "type": "put",
    "url": "/chat/invitations/:id",
    "title": "Update chat invitations",
    "name": "Update_chat_invitations_data",
    "description": "<p>This endpoint update chat invitations information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat invitations</p>"
          }
        ]
      }
    },
    "group": "ChatInvitations",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/invitations/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatInvitations"
  },
  {
    "type": "post",
    "url": "/chat/rooms",
    "title": "Add new chat rooms",
    "name": "Add_new_chat_rooms",
    "description": "<p>This endpoint adds new chat rooms</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "ChatRoom",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/rooms/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "delete",
    "url": "/chat/rooms/:id",
    "title": "Delete chat roomss",
    "name": "Delete_chat_rooms_data",
    "description": "<p>This endpoint delete chat roomss information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat rooms</p>"
          }
        ]
      }
    },
    "group": "ChatRoom",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/rooms/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "get",
    "url": "/chat/rooms",
    "title": "Get chat rooms",
    "name": "Get_list_of_chat_rooms",
    "description": "<p>This endpoint get list of chat rooms</p>",
    "group": "ChatRoom",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/rooms"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "put",
    "url": "/chat/rooms/:id",
    "title": "Update chat rooms",
    "name": "Update_chat_rooms_data",
    "description": "<p>This endpoint update chat rooms information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat rooms</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_active",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "ChatRoom",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/rooms/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "post",
    "url": "/chat/smileys",
    "title": "Add new chat smileys",
    "name": "Add_new_chat_smileys",
    "description": "<p>This endpoint adds new chat smileys</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "url",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company.id",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "ChatSmileys",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/smileys/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSmileys"
  },
  {
    "type": "delete",
    "url": "/chat/smileys/:id",
    "title": "Delete chat smileyss",
    "name": "Delete_chat_smileys_data",
    "description": "<p>This endpoint delete chat smileyss information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat smileys</p>"
          }
        ]
      }
    },
    "group": "ChatSmileys",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/smileys/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSmileys"
  },
  {
    "type": "get",
    "url": "/chat/smileys",
    "title": "Get chat smileys",
    "name": "Get_list_of_chat_smileys",
    "description": "<p>This endpoint get list of chat smileys</p>",
    "group": "ChatSmileys",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/smileys"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSmileys"
  },
  {
    "type": "put",
    "url": "/chat/smileys/:id",
    "title": "Update chat smileys",
    "name": "Update_chat_smileys_data",
    "description": "<p>This endpoint update chat smileys information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat smileys</p>"
          }
        ]
      }
    },
    "group": "ChatSmileys",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/smileys/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSmileys"
  },
  {
    "type": "post",
    "url": "/chat/sounds",
    "title": "Add new chat sound",
    "name": "Add_new_chat_sound",
    "description": "<p>This endpoint adds new chat sound</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "ChatSound",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/sounds/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSound"
  },
  {
    "type": "delete",
    "url": "/chat/sounds/:id",
    "title": "Delete chat sound",
    "name": "Delete_chat_sound_data",
    "description": "<p>This endpoint delete chat sound information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat sound</p>"
          }
        ]
      }
    },
    "group": "ChatSound",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/sounds/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSound"
  },
  {
    "type": "get",
    "url": "/chat/sounds",
    "title": "Get chat sound",
    "name": "Get_list_of_chat_sounds",
    "description": "<p>This endpoint get list of chat sounds</p>",
    "group": "ChatSound",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/sounds"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSound"
  },
  {
    "type": "put",
    "url": "/chat/sounds/:id",
    "title": "Update chat sound",
    "name": "Update_chat_sound_data",
    "description": "<p>This endpoint update chat sound information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of chat sound</p>"
          }
        ]
      }
    },
    "group": "ChatSound",
    "sampleRequest": [
      {
        "url": "/backend/api/chat/sounds/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ChatSound"
  },
  {
    "type": "post",
    "url": "/message/",
    "title": "Add new message",
    "name": "Add_new_message",
    "description": "<p>This endpoint saves the message from chat</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "sender",
            "description": "<p>id of user</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<p>message content</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/message"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "post",
    "url": "livechat/message/upload",
    "title": "Upload file for conversation",
    "name": "Get_all_online_visitors",
    "description": "<p>This endpoint upload file to server and create thumbnail for images (used for attachements)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "file",
            "description": "<p>file to upload (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room (Required)</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "livechat/message/upload"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "get",
    "url": "/guest/messages/:token/:page/:limit",
    "title": "Get conversations history for guests",
    "name": "Get_messages_for_specific_guest_with_pagination",
    "description": "<p>This endpoint return messages for specific guest with pagination function</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>token stored in coockie (Example: bd7782358c96df79aaa0c4af5a38b40c)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "limit",
            "defaultValue": "15",
            "description": "<p>limit of entries for history</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/guest/messages/:token/:page/:limit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "get",
    "url": "/message/get/:room_id/:page/:limit",
    "title": "Get conversations of company",
    "name": "Get_messages_for_specific_room_with_pagination",
    "description": "<p>This endpoint return messages for specific room with pagination function</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "limit",
            "defaultValue": "15",
            "description": "<p>limit of entries for history</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/message/get/:room_id/:page/:limit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "get",
    "url": "/message/period/:date_start/:room_id/:page/:limit",
    "title": "Get conversations by start time",
    "name": "Get_messages_for_specific_room_with_pagination_by_start_time",
    "description": "<p>This endpoint return messages for specific room with pagination function</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "date_start",
            "description": "<p>timestamp format start date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "limit",
            "defaultValue": "15",
            "description": "<p>limit of entries for history</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/message/period/:date_start/:room_id/:page/:limit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "delete",
    "url": "/message/:id",
    "title": "Remove chat message",
    "name": "Remove_chat_message",
    "description": "<p>This endpoint remove chat message</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>of chat message</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/message/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "post",
    "url": "/chat/message",
    "title": "Save message of guest",
    "name": "Save_message_from_chat",
    "description": "<p>This endpoint save message for guests</p>",
    "group": "Chat_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "sender",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/chat/message"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "put",
    "url": "/message/:id",
    "title": "Update chat message",
    "name": "Update_chat_message",
    "description": "<p>This endpoint updates chat messages</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>id of chat message</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "sender",
            "description": "<p>id of sender</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<p>content of message</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/backend/api/message/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "post",
    "url": "/upload/emoji",
    "title": "Upload file for chat",
    "name": "Upload_emoji",
    "description": "<p>This endpoint upload file to server and create emoji</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "file",
            "description": "<p>file to upload (Required)</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/upload/emoji"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "post",
    "url": "/message/upload",
    "title": "Upload file for conversation",
    "name": "Upload_file_message",
    "description": "<p>This endpoint upload file to server and create thumbnail for images (used for attachements)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "file",
            "description": "<p>file to upload (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room (Required)</p>"
          }
        ]
      }
    },
    "group": "Chat_Messages",
    "sampleRequest": [
      {
        "url": "/message/upload"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "post",
    "url": "room",
    "title": "Add new user to room",
    "name": "Add_new_user_to_room",
    "description": "<p>This endpoint add new user to room</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>id of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "group": "Chat_Room_Users",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Room_Users"
  },
  {
    "type": "delete",
    "url": "/room/users/:id",
    "title": "Remove user from room",
    "name": "Remove_chat_room",
    "description": "<p>This endpoint remove chat room</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>of chat room</p>"
          }
        ]
      }
    },
    "group": "Chat_Room_Users",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Room_Users"
  },
  {
    "type": "put",
    "url": "room/users/:id",
    "title": "Update chat room",
    "name": "Update_chat_room",
    "description": "<p>This endpoint update lead products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>title for room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "status",
            "description": "<p>1 = active, 0 = disabled</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "administrator",
            "description": "<p>id of user administrator of room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>id of company</p>"
          }
        ]
      }
    },
    "group": "Chat_Room_Users",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Room_Users"
  },
  {
    "type": "post",
    "url": "/upload/sound",
    "title": "Upload file for chat",
    "name": "Upload_sound",
    "description": "<p>This endpoint upload file to server and create sound</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "file",
            "description": "<p>file to upload (Required)</p>"
          }
        ]
      }
    },
    "group": "Chat_Settings",
    "sampleRequest": [
      {
        "url": "/upload/sound"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Chat_Settings"
  },
  {
    "type": "post",
    "url": "/company",
    "title": "Add new company",
    "name": "Add_new_company",
    "description": "<p>This endpoint add new company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>company title</p>"
          }
        ]
      }
    },
    "group": "Company",
    "sampleRequest": [
      {
        "url": "/backend/api/company"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company/currency",
    "title": "Add new company currency",
    "name": "Add_new_company_currency",
    "description": "<p>This endpoint adds new company currency</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/currency/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "post",
    "url": "/company/rates",
    "title": "Add new company rate",
    "name": "Add_new_company_rate",
    "description": "<p>This endpoint adds new company rate</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "delete",
    "url": "/company/currency/:id",
    "title": "Delete company currency",
    "name": "Delete_company_currency_data",
    "description": "<p>This endpoint delete company currency information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company currency</p>"
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/currency/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "delete",
    "url": "/company/rates/:id",
    "title": "Delete company rate",
    "name": "Delete_company_rate_data",
    "description": "<p>This endpoint delete company rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company rate</p>"
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/rates/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "get",
    "url": "/company/currency",
    "title": "Get company currency",
    "name": "Get_list_of_company_currencies",
    "description": "<p>This endpoint get list of company currencies</p>",
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/currency"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "get",
    "url": "/company/rates",
    "title": "Get company rate",
    "name": "Get_list_of_company_rates",
    "description": "<p>This endpoint get list of company rates</p>",
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/rates"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "put",
    "url": "/company/currency/:id",
    "title": "Update company currency",
    "name": "Update_company_currency_data",
    "description": "<p>This endpoint update company currency information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company currency</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/currency/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "put",
    "url": "/company/rates/:id",
    "title": "Update company rate",
    "name": "Update_company_rate_data",
    "description": "<p>This endpoint update company rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company rate</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CompanyCurrency",
    "sampleRequest": [
      {
        "url": "/backend/api/company/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanyCurrency"
  },
  {
    "type": "delete",
    "url": "/company/:id",
    "title": "Delete company",
    "name": "Delete_company",
    "description": "<p>This endpoint delete company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company</p>"
          }
        ]
      }
    },
    "group": "Company",
    "sampleRequest": [
      {
        "url": "/backend/api/company/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company",
    "title": "Get list",
    "name": "Get_list_of_companies",
    "description": "<p>This endpoint</p>",
    "group": "Company",
    "sampleRequest": [
      {
        "url": "/backend/api/company"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company/setting",
    "title": "Add new company setting",
    "name": "Add_new_company_setting",
    "description": "<p>This endpoint adds new company setting</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>company settings</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "setting_id",
            "description": "<p>company settings</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "value",
            "description": "<p>company settings</p>"
          }
        ]
      }
    },
    "group": "CompanySettings",
    "sampleRequest": [
      {
        "url": "/backend/api/company/setting/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanySettings"
  },
  {
    "type": "delete",
    "url": "/company/setting/:id",
    "title": "Delete company settings",
    "name": "Delete_company_settings_data",
    "description": "<p>This endpoint delete company settings information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company settings</p>"
          }
        ]
      }
    },
    "group": "CompanySettings",
    "sampleRequest": [
      {
        "url": "/backend/api/company/setting/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanySettings"
  },
  {
    "type": "get",
    "url": "/company/setting",
    "title": "Get company settings",
    "name": "Get_list_of_company_settings",
    "description": "<p>This endpoint get list of company settings</p>",
    "group": "CompanySettings",
    "sampleRequest": [
      {
        "url": "/backend/api/company/setting"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanySettings"
  },
  {
    "type": "put",
    "url": "/company/setting/:id",
    "title": "Update company settings",
    "name": "Update_company_settings_data",
    "description": "<p>This endpoint update company settings information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company settings</p>"
          }
        ]
      }
    },
    "group": "CompanySettings",
    "sampleRequest": [
      {
        "url": "/backend/api/company/setting/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CompanySettings"
  },
  {
    "type": "put",
    "url": "/company/:id",
    "title": "Update company",
    "name": "Update_company_data",
    "description": "<p>This endpoint update company information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>company title</p>"
          }
        ]
      }
    },
    "group": "Company",
    "sampleRequest": [
      {
        "url": "/backend/api/company"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "/company_filters/:id",
    "title": "Delete company_filters",
    "name": "Delete_company_filters",
    "description": "<p>This endpoint delete company_filters</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company_filters</p>"
          }
        ]
      }
    },
    "group": "Company_Filters",
    "sampleRequest": [
      {
        "url": "/backend/api/company_filters/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Company_Filters"
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "Add new contact",
    "name": "Add_new_contact",
    "description": "<p>This endpoint add new contact</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "firstname",
            "description": "<p>of contact</p>"
          }
        ]
      }
    },
    "group": "Contact",
    "sampleRequest": [
      {
        "url": "/backend/api/contact"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contact"
  },
  {
    "type": "delete",
    "url": "/contact/:id",
    "title": "Delete contact",
    "name": "Delete_contact",
    "description": "<p>This endpoint delete contact</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact</p>"
          }
        ]
      }
    },
    "group": "Contact",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact",
    "title": "Get list",
    "name": "Get_list_of_contact",
    "description": "<p>This endpoint</p>",
    "group": "Contact",
    "sampleRequest": [
      {
        "url": "/backend/api/contact"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/contact/positions",
    "title": "Add new contact position",
    "name": "Add_new_contact_position",
    "description": "<p>This endpoint adds new contact position</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "post",
    "url": "/contact/positions",
    "title": "Add new contact position",
    "name": "Add_new_contact_position",
    "description": "<p>This endpoint adds new contact position</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "delete",
    "url": "/contact/positions/:id",
    "title": "Delete contact position",
    "name": "Delete_contact_position_data",
    "description": "<p>This endpoint delete contact position information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "delete",
    "url": "/contact/positions/:id",
    "title": "Delete contact positions",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete contact positions information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "get",
    "url": "/contact/positions",
    "title": "Get contact position",
    "name": "Get_list_of_contact_position",
    "description": "<p>This endpoint get list of contact position</p>",
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "get",
    "url": "/contact/positions",
    "title": "Get contact position",
    "name": "Get_list_of_contact_position",
    "description": "<p>This endpoint get list of contact position</p>",
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "put",
    "url": "/contact/positions/:id",
    "title": "Update contact position",
    "name": "Update_contact_position_data",
    "description": "<p>This endpoint update contact position information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact position</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "put",
    "url": "/contact/positions/:id",
    "title": "Update contact position",
    "name": "Update_contact_position_data",
    "description": "<p>This endpoint update contact position information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact position</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>contact position</p>"
          }
        ]
      }
    },
    "group": "ContactPosition",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/positions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContactPosition"
  },
  {
    "type": "put",
    "url": "/contact/:id",
    "title": "Update contact",
    "name": "Update_contact_data",
    "description": "<p>This endpoint update contact information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contact</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "firstname",
            "description": "<p>of contact</p>"
          }
        ]
      }
    },
    "group": "Contact",
    "sampleRequest": [
      {
        "url": "/backend/api/contact/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/contracts",
    "title": "Add new contract",
    "name": "Add_new_contract",
    "description": "<p>This endpoint adds new contract</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "group": "Contract",
    "sampleRequest": [
      {
        "url": "/backend/api/contracts/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contract"
  },
  {
    "type": "delete",
    "url": "/contracts/:id",
    "title": "Delete contract",
    "name": "Delete_contract_data",
    "description": "<p>This endpoint delete contract information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contract</p>"
          }
        ]
      }
    },
    "group": "Contract",
    "sampleRequest": [
      {
        "url": "/backend/api/contracts/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contract"
  },
  {
    "type": "get",
    "url": "/contracts",
    "title": "Get contracts",
    "name": "Get_list_of_contracts",
    "description": "<p>This endpoint get list of contracts</p>",
    "group": "Contract",
    "sampleRequest": [
      {
        "url": "/backend/api/contracts"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contract"
  },
  {
    "type": "post",
    "url": "/contract/types",
    "title": "Add new contract type",
    "name": "Add_new_contract_type",
    "description": "<p>This endpoint adds new contract type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "ContractType",
    "sampleRequest": [
      {
        "url": "/backend/api/contract/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContractType"
  },
  {
    "type": "delete",
    "url": "/contract/types/:id",
    "title": "Delete contract type",
    "name": "Delete_contract_type_data",
    "description": "<p>This endpoint delete contract type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contract type</p>"
          }
        ]
      }
    },
    "group": "ContractType",
    "sampleRequest": [
      {
        "url": "/backend/api/contract/types/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContractType"
  },
  {
    "type": "get",
    "url": "/contract/types",
    "title": "Get contract types",
    "name": "Get_list_of_contract_types",
    "description": "<p>This endpoint get list of contract types</p>",
    "group": "ContractType",
    "sampleRequest": [
      {
        "url": "/backend/api/contract/types"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContractType"
  },
  {
    "type": "put",
    "url": "/contract/types/:id",
    "title": "Update contract type",
    "name": "Update_contract_type_data",
    "description": "<p>This endpoint update contract type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contract type</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "ContractType",
    "sampleRequest": [
      {
        "url": "/backend/api/contract/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ContractType"
  },
  {
    "type": "put",
    "url": "/contracts/:id",
    "title": "Update contract",
    "name": "Update_contract_data",
    "description": "<p>This endpoint update contract information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of contract</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "group": "Contract",
    "sampleRequest": [
      {
        "url": "/backend/api/contracts/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Contract"
  },
  {
    "type": "get",
    "url": "/counterparties",
    "title": "Get list of counterparties",
    "name": "Get_list_of_counterparties",
    "description": "<p>This endpoint returns list of counterparties</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparties",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparties"
  },
  {
    "type": "post",
    "url": "/counterparties",
    "title": "Insert new counterpart",
    "name": "Insert_new_counterpart",
    "description": "<p>This endpoint insert new counterpart</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>for permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>code for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>1 = Client</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparties"
  },
  {
    "type": "delete",
    "url": "/counterparties/:id",
    "title": "Remove counterpart",
    "name": "Remove_permission",
    "description": "<p>This endpoint removes counterpart</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of counterpart</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparties"
  },
  {
    "type": "put",
    "url": "/counterparties/:id",
    "title": "Update counterpart by id",
    "name": "Update_counterpart_by_id",
    "description": "<p>This endpoint update counterpart record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>for permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>code for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>1 = Client</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparties"
  },
  {
    "type": "get",
    "url": "/counterparty/balance",
    "title": "Get list of counterparty balance",
    "name": "Get_list_of_counterparty_balance",
    "description": "<p>This endpoint returns list of counterparty balance</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "CounterpartyBalance",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/balance"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyBalance"
  },
  {
    "type": "post",
    "url": "/counterparty/balance",
    "title": "Insert new counterparty balance",
    "name": "Insert_new_counterparty_balance",
    "description": "<p>This endpoint insert new counterparty balance</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "CounterpartyBalance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counterparty",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/balance"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyBalance"
  },
  {
    "type": "delete",
    "url": "/counterparty/balance/:id",
    "title": "Remove counterparty balance",
    "name": "Remove_permission",
    "description": "<p>This endpoint removes counterparty balance</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "CounterpartyBalance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of counterparty balance</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/balance/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyBalance"
  },
  {
    "type": "put",
    "url": "/counterparty/balance/:id",
    "title": "Update counterparty balance by id",
    "name": "Update_counterparty_balance_by_id",
    "description": "<p>This endpoint update counterparty balance record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "CounterpartyBalance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of counterparty balance</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/balance/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyBalance"
  },
  {
    "type": "post",
    "url": "/counterparty/groups",
    "title": "Add new counterpart group",
    "name": "Add_new_counterparties_group",
    "description": "<p>This endpoint adds new counterpart group</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of counterpart group</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CounterpartyGroup",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/groups/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyGroup"
  },
  {
    "type": "delete",
    "url": "/counterparty/groups/:id",
    "title": "Delete counterpart group",
    "name": "Delete_counterpart_group_data",
    "description": "<p>This endpoint delete counterpart group information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of counterparties/group</p>"
          }
        ]
      }
    },
    "group": "CounterpartyGroup",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/groups/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyGroup"
  },
  {
    "type": "get",
    "url": "/counterparty/groups",
    "title": "Get counterpart groups",
    "name": "Get_list_of_counterpart_groups",
    "description": "<p>This endpoint get list of counterpart groups</p>",
    "group": "CounterpartyGroup",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/groups"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyGroup"
  },
  {
    "type": "put",
    "url": "/counterparty/groups/:id",
    "title": "Update counterpart group",
    "name": "Update_counterparties_group_data",
    "description": "<p>This endpoint update counterpart group information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of counterparty group</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "group": "CounterpartyGroup",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparty/groups/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "CounterpartyGroup"
  },
  {
    "type": "get",
    "url": "/counterparties/type",
    "title": "Get list of counterparties",
    "name": "Get_list_of_counterparties",
    "description": "<p>This endpoint returns list of counterparties</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparty_Types",
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparty_Types"
  },
  {
    "type": "post",
    "url": "/counterparties/type",
    "title": "Insert new counterpart",
    "name": "Insert_new_counterpart",
    "description": "<p>This endpoint insert new counterpart</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparty_Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department_id",
            "description": "<p>id of department</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n[title]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparty_Types"
  },
  {
    "type": "post",
    "url": "/counterparts/reg",
    "title": "Register counterpart",
    "name": "Register_counterpart",
    "description": "<p>This endpoint Register counterpart</p>",
    "group": "Counterparty_Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "firstname",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparts/reg"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparty_Types"
  },
  {
    "type": "delete",
    "url": "/counterparties/type/:id",
    "title": "Remove counterpart",
    "name": "Remove_permission",
    "description": "<p>This endpoint removes counterpart</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparty_Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of counterpart type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/type/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparty_Types"
  },
  {
    "type": "put",
    "url": "/counterparties/type/:id",
    "title": "Update counterpart by id",
    "name": "Update_counterpart_by_id",
    "description": "<p>This endpoint update counterpart record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Counterparty_Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department_id",
            "description": "<p>id of department</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n[title]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/counterparties/type/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Counterparty_Types"
  },
  {
    "type": "post",
    "url": "/country",
    "title": "Add new country",
    "name": "Add_new_country",
    "description": "<p>This endpoint add new country</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>of country</p>"
          }
        ]
      }
    },
    "group": "Country",
    "sampleRequest": [
      {
        "url": "/backend/api/country"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "delete",
    "url": "/country/:id",
    "title": "Delete country",
    "name": "Delete_country",
    "description": "<p>This endpoint delete country</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of country</p>"
          }
        ]
      }
    },
    "group": "Country",
    "sampleRequest": [
      {
        "url": "/backend/api/country/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/country",
    "title": "Get list",
    "name": "Get_list_of_country",
    "description": "<p>This endpoint</p>",
    "group": "Country",
    "sampleRequest": [
      {
        "url": "/backend/api/country"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "put",
    "url": "/country/:id",
    "title": "Update country",
    "name": "Update_country_data",
    "description": "<p>This endpoint update country information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of country</p>"
          }
        ]
      }
    },
    "group": "Country",
    "sampleRequest": [
      {
        "url": "/backend/api/country/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "post",
    "url": "/currency",
    "title": "Add new currency",
    "name": "Add_new_currency",
    "description": "<p>This endpoint create the new currency</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "sign",
            "description": "<p>of currency (Required)</p>"
          }
        ]
      }
    },
    "group": "Currency",
    "sampleRequest": [
      {
        "url": "/backend/api/currency"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Currency"
  },
  {
    "type": "delete",
    "url": "/currency/:id",
    "title": "Delete currency",
    "name": "Delete_currency",
    "description": "<p>This endpoint delete the currency</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of currency</p>"
          }
        ]
      }
    },
    "group": "Currency",
    "sampleRequest": [
      {
        "url": "/backend/api/currency/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Currency"
  },
  {
    "type": "get",
    "url": "/currency",
    "title": "Get currencies",
    "name": "Get_list_of_currencies",
    "description": "<p>This endpoint return the list of currencies</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Currency",
    "sampleRequest": [
      {
        "url": "/backend/api/currency"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Currency"
  },
  {
    "type": "put",
    "url": "/currency/:id",
    "title": "Update currency",
    "name": "Update_currency",
    "description": "<p>This endpoint update the information about currency</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of currency (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "sign",
            "description": "<p>of currency</p>"
          }
        ]
      }
    },
    "group": "Currency",
    "sampleRequest": [
      {
        "url": "/backend/api/currency/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Currency"
  },
  {
    "type": "post",
    "url": "/demo/send/data",
    "title": "Send costum demo email",
    "name": "Send_costum_demo_email",
    "description": "<p>This endpoint sends demo email with costum data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "to[email]",
            "description": "<p>email of recipient</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "to[name]",
            "description": "<p>name of recipient</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "subject",
            "description": "<p>subject for message</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "templates[html]",
            "description": "<p>html template for mail</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "templates[text]",
            "description": "<p>raw template for mail</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "html[header]",
            "description": "<p>content of html header</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "html[content]",
            "description": "<p>content of html template</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "html[footer]",
            "description": "<p>content of html footer</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text[header]",
            "description": "<p>header content for raw template</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text[content]",
            "description": "<p>content for raw template</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text[footer]",
            "description": "<p>footer for raw template</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "from[email]",
            "description": "<p>email for sender</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "from[name]",
            "description": "<p>name for sender</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "attach[0]",
            "description": "<p>file attachement</p>"
          }
        ]
      }
    },
    "group": "Demo_Mail",
    "sampleRequest": [
      {
        "url": "/backend/api/demo/send/data"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Demo_Mail"
  },
  {
    "type": "post",
    "url": "/demo/send",
    "title": "Send demo email to email",
    "name": "Send_demo_email_to_specified_email_address",
    "description": "<p>This endpoint sends demo email to specified email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>email of recipient</p>"
          }
        ]
      }
    },
    "group": "Demo_Mail",
    "sampleRequest": [
      {
        "url": "/backend/api/demo/send"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Demo_Mail"
  },
  {
    "type": "get",
    "url": "/demo/send/:id",
    "title": "Send demo email to user by id",
    "name": "Send_demo_email_to_user_by_id",
    "description": "<p>This endpoint sends demo mail to user email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "group": "Demo_Mail",
    "sampleRequest": [
      {
        "url": "/backend/api/demo/send/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Demo_Mail"
  },
  {
    "type": "delete",
    "url": "/department/{id}",
    "title": "Delete department",
    "name": "Delete_department",
    "description": "<p>This endpoint delete the information about department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of department (Required)</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "/department/:department/user/:user",
    "title": "Delete user from department",
    "name": "Delete_user_from_department",
    "description": "<p>This endpoint delete the given user from given department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "department",
            "description": "<p>ID of department (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department/:department/user/:user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/departments",
    "title": "Get list of all departments by company",
    "name": "Get_list_of_all_departments_for_logged_in_user__Administrator__",
    "description": "<p>This endpoint returns list of departments for logged in user (Administrator)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/departments"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department/user",
    "title": "Get list of departments by user",
    "name": "Get_list_of_departments_for_logged_in_user__Administrator__",
    "description": "<p>This endpoint returns list of departments for logged in user (Administrator)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department/user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department/:id/users",
    "title": "Get list of users from department",
    "name": "Get_users_by_department",
    "description": "<p>This endpoint returns list of users from department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of department (Required)</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department/:id/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/department",
    "title": "Add new department",
    "name": "Insert_new_department",
    "description": "<p>This endpoint insert new department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of department</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "/department/:id",
    "title": "Update department",
    "name": "Update_department",
    "description": "<p>This endpoint updates information department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of department (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of department</p>"
          }
        ]
      }
    },
    "group": "Department",
    "sampleRequest": [
      {
        "url": "/backend/api/department"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/domains",
    "title": "Add new domains",
    "name": "Add_new_domains",
    "description": "<p>This endpoint add new domains</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>of domain</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>of domain</p>"
          }
        ]
      }
    },
    "group": "Domain",
    "sampleRequest": [
      {
        "url": "/backend/api/domains"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Domain"
  },
  {
    "type": "delete",
    "url": "/domains/:id",
    "title": "Delete domains",
    "name": "Delete_domains",
    "description": "<p>This endpoint delete domains</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of domains</p>"
          }
        ]
      }
    },
    "group": "Domain",
    "sampleRequest": [
      {
        "url": "/backend/api/domains/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Domain"
  },
  {
    "type": "get",
    "url": "/domains",
    "title": "Get list",
    "name": "Get_list_of_domains",
    "description": "<p>This endpoint</p>",
    "group": "Domain",
    "sampleRequest": [
      {
        "url": "/backend/api/domains"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Domain"
  },
  {
    "type": "post",
    "url": "/domain/records/company/:id",
    "title": "Add new domain record",
    "name": "Add_new_domain_record",
    "description": "<p>This endpoint add new domain record for company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>domain name eg.everest</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/company/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "post",
    "url": "/domain/records",
    "title": "Add new domain/records",
    "name": "Add_new_domain_records",
    "description": "<p>This endpoint add new domain/records</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>of domain record</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "domain_id",
            "description": "<p>of domain record</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "delete",
    "url": "/domain/records/company/:id",
    "title": "Delete domain record",
    "name": "Delete_domain_record_data",
    "description": "<p>This endpoint delete domain record information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>domain name eg.everest2</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/company/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "delete",
    "url": "/domain/records/:id",
    "title": "Delete domain/records",
    "name": "Delete_domain_records",
    "description": "<p>This endpoint delete domain/records</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of domain/records</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "get",
    "url": "/domain/records/company/:id",
    "title": "Get domain records",
    "name": "Get_list_of_company_domain_records",
    "description": "<p>This endpoint get list of domain records of company</p>",
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/company/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "get",
    "url": "/domain/records",
    "title": "Get list",
    "name": "Get_list_of_domain_records",
    "description": "<p>This endpoint</p>",
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "put",
    "url": "/domain/records/company/:id",
    "title": "Update domain record",
    "name": "Update_domain_record_data",
    "description": "<p>This endpoint update domain record information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of company</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "oldName",
            "description": "<p>domain name eg.everest</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>domain name eg.everest2</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/company/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "put",
    "url": "/domain/records/:id",
    "title": "Update domain/records",
    "name": "Update_domain_records_data",
    "description": "<p>This endpoint update domain/records information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of domain/records</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>of domain record</p>"
          }
        ]
      }
    },
    "group": "DomainRecord",
    "sampleRequest": [
      {
        "url": "/backend/api/domain/records/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "DomainRecord"
  },
  {
    "type": "put",
    "url": "/domains/:id",
    "title": "Update domains",
    "name": "Update_domains_data",
    "description": "<p>This endpoint update domains information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of domains</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "group": "Domain",
    "sampleRequest": [
      {
        "url": "/backend/api/domains/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Domain"
  },
  {
    "type": "get",
    "url": "/email/templates",
    "title": "Get list of email template",
    "name": "Get_list_of_email_templates",
    "description": "<p>This endpoint returns list of email template</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "EmailTemplate",
    "sampleRequest": [
      {
        "url": "/backend/api/email/templates"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "EmailTemplate"
  },
  {
    "type": "post",
    "url": "/email/templates",
    "title": "Insert new email template",
    "name": "Insert_new_email_template",
    "description": "<p>This endpoint insert new email template</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "EmailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Template",
            "optional": false,
            "field": "email",
            "description": "<p>template name or path</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/email/templates"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "EmailTemplate"
  },
  {
    "type": "delete",
    "url": "/email/templates/:id",
    "title": "Remove email template",
    "name": "Remove_permission",
    "description": "<p>This endpoint removes email template</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "EmailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of email template</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/email/templates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "EmailTemplate"
  },
  {
    "type": "put",
    "url": "/email/templates/:id",
    "title": "Update email template by id",
    "name": "Update_email_template_by_id",
    "description": "<p>This endpoint update email template record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "EmailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of email template</p>"
          },
          {
            "group": "Parameter",
            "type": "Template",
            "optional": false,
            "field": "email",
            "description": "<p>template name or path</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/email/templates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "EmailTemplate"
  },
  {
    "type": "get",
    "url": "/error",
    "title": "Get list of errors",
    "name": "Get_list_of_errors",
    "description": "<p>This endpoint return list of errors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Errors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of error</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/error"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Errors"
  },
  {
    "type": "post",
    "url": "/error",
    "title": "Insert new errors",
    "name": "Insert_new_errors",
    "description": "<p>This endpoint insert new error</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Errors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>of error</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>of error</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[content]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/error"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Errors"
  },
  {
    "type": "delete",
    "url": "/error/{id}",
    "title": "Remove errors from list",
    "name": "Remove_error",
    "description": "<p>This endpoint remove error</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Errors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of error</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/error/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Errors"
  },
  {
    "type": "put",
    "url": "/error/{id}",
    "title": "Update errors translation by id",
    "name": "Update_error_translation_by_id",
    "description": "<p>This endpoint update message of error selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Errors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of error</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>of error</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>of error</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[content]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/error/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Errors"
  },
  {
    "type": "get",
    "url": "/example",
    "title": "Get list of examples",
    "name": "Get_list_of_examples",
    "description": "<p>This endpoint return list of examples</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of example</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/example"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Example"
  },
  {
    "type": "post",
    "url": "/example",
    "title": "Insert new example",
    "name": "Insert_new_example",
    "description": "<p>This endpoint insert new example</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>number for example</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>for example</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[title]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/example"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Example"
  },
  {
    "type": "delete",
    "url": "/example/{id}",
    "title": "Remove example record",
    "name": "Remove_example",
    "description": "<p>This endpoint remove example records</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of example</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/example/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Example"
  },
  {
    "type": "put",
    "url": "/example/{id}",
    "title": "Update example by id",
    "name": "Update_example_by_id",
    "description": "<p>This endpoint update example record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of example</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>number for example</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>for example</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[title]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/example/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Example"
  },
  {
    "type": "post",
    "url": "/extra_accounts",
    "title": "Add new extra_accounts",
    "name": "Add_new_extra_accounts",
    "description": "<p>This endpoint add new extra_accounts</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "provider_id",
            "description": "<p>of extra_accounts provier token</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>of extra_accounts</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "provider_type",
            "description": "<p>of extra_accounts</p>"
          }
        ]
      }
    },
    "group": "ExtraAccounts",
    "sampleRequest": [
      {
        "url": "/backend/api/extra_accounts"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ExtraAccounts"
  },
  {
    "type": "delete",
    "url": "/extra_accounts/:id",
    "title": "Delete extra_accounts",
    "name": "Delete_extra_accounts",
    "description": "<p>This endpoint delete extra_accounts</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of extra_accounts</p>"
          }
        ]
      }
    },
    "group": "ExtraAccounts",
    "sampleRequest": [
      {
        "url": "/backend/api/extra_accounts/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ExtraAccounts"
  },
  {
    "type": "get",
    "url": "/extra_accounts",
    "title": "Get list",
    "name": "Get_list_of_extra_accounts",
    "description": "<p>This endpoint</p>",
    "group": "ExtraAccounts",
    "sampleRequest": [
      {
        "url": "/backend/api/extra_accounts"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ExtraAccounts"
  },
  {
    "type": "put",
    "url": "/extra_accounts/:id",
    "title": "Update extra_accounts",
    "name": "Update_extra_accounts_data",
    "description": "<p>This endpoint update extra_accounts information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "provider_id",
            "description": "<p>of extra_accounts provider token</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "provider_type",
            "description": "<p>of extra_accounts</p>"
          }
        ]
      }
    },
    "group": "ExtraAccounts",
    "sampleRequest": [
      {
        "url": "/backend/api/extra_accounts/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ExtraAccounts"
  },
  {
    "type": "get",
    "url": "/window/{name}/{width?}/{height?}",
    "title": "Get window by name , width and height",
    "name": "Get_window_by_name___width_and_height",
    "description": "<p>This endpoint returns window by name,width and height</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "FrontWindow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Name of the window Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "width",
            "description": "<ul> <li>Width of required window (Optional)</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "height",
            "description": "<ul> <li>Height of required window (Optional)</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/window/{name}/{width?}/{height?}"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "FrontWindow"
  },
  {
    "type": "get",
    "url": "/window-data/{name}/{width}",
    "title": "Get window by name and width",
    "name": "Get_window_by_name_and_width",
    "description": "<p>This endpoint returns window by name and width</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "FrontWindow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Name of the window Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "width",
            "description": "<ul> <li>Width of the window Required</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/window-data/{name}/{width}"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "FrontWindow"
  },
  {
    "type": "post",
    "url": "/import/countries",
    "title": "Import countries",
    "name": "Import_countries",
    "description": "<p>This endpoint post list of countries</p>",
    "group": "Import",
    "sampleRequest": [
      {
        "url": "/backend/api/import/countries"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/import/countries/content",
    "title": "Import countries i18n for english language",
    "name": "Import_countries_i18n",
    "description": "<p>This endpoint post list of countries i18n</p>",
    "group": "Import",
    "sampleRequest": [
      {
        "url": "/backend/api/import/countries/content"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/import/states",
    "title": "Import states",
    "name": "Import_states",
    "description": "<p>This endpoint post list of states</p>",
    "group": "Import",
    "sampleRequest": [
      {
        "url": "/backend/api/import/states"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/invoices",
    "title": "Add new invoice",
    "name": "Add_new_invoice",
    "description": "<p>This endpoint adds new invoice</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of invoice</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "invoice_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "counterparty_id",
            "description": ""
          }
        ]
      }
    },
    "group": "Invoice",
    "sampleRequest": [
      {
        "url": "/backend/api/invoices/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Invoice"
  },
  {
    "type": "delete",
    "url": "/invoices/:id",
    "title": "Delete invoices",
    "name": "Delete_invoices_data",
    "description": "<p>This endpoint delete invoices information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoices</p>"
          }
        ]
      }
    },
    "group": "Invoice",
    "sampleRequest": [
      {
        "url": "/backend/api/invoices/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Invoice"
  },
  {
    "type": "get",
    "url": "/invoices",
    "title": "Get invoice",
    "name": "Get_list_of_invoice",
    "description": "<p>This endpoint get list of invoice</p>",
    "group": "Invoice",
    "sampleRequest": [
      {
        "url": "/backend/api/invoices"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Invoice"
  },
  {
    "type": "post",
    "url": "/invoice/products",
    "title": "Add new invoice products",
    "name": "Add_new_invoice_products",
    "description": "<p>This endpoint adds new invoice products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "invoice_id",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>invoice products</p>"
          }
        ]
      }
    },
    "group": "InvoiceProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceProducts"
  },
  {
    "type": "delete",
    "url": "/pm/board/:id",
    "title": "Delete pm board",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete pm board information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm board</p>"
          }
        ]
      }
    },
    "group": "InvoiceProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "InvoiceProducts"
  },
  {
    "type": "delete",
    "url": "/invoice/products/:id",
    "title": "Delete invoice products",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete invoice products information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoice products</p>"
          }
        ]
      }
    },
    "group": "InvoiceProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/products/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceProducts"
  },
  {
    "type": "get",
    "url": "/invoice/products",
    "title": "Get invoice products",
    "name": "Get_list_of_invoice_products",
    "description": "<p>This endpoint get list of invoice products</p>",
    "group": "InvoiceProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceProducts"
  },
  {
    "type": "put",
    "url": "/invoice/products/:id",
    "title": "Update invoice products",
    "name": "Update_invoice_products_data",
    "description": "<p>This endpoint update invoice products information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "invoice_id",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "quantity",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "price",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "unit_id",
            "description": "<p>invoice products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "total",
            "description": "<p>invoice products</p>"
          }
        ]
      }
    },
    "group": "InvoiceProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceProducts"
  },
  {
    "type": "post",
    "url": "/invoice/status",
    "title": "Add new invoice status",
    "name": "Add_new_invoice_status",
    "description": "<p>This endpoint adds new invoice status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>invoice status</p>"
          }
        ]
      }
    },
    "group": "InvoiceStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceStatus"
  },
  {
    "type": "delete",
    "url": "/invoice/status/:id",
    "title": "Delete invoice statuss",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete invoice statuss information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoice status</p>"
          }
        ]
      }
    },
    "group": "InvoiceStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/status/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceStatus"
  },
  {
    "type": "get",
    "url": "/invoice/status",
    "title": "Get invoice status",
    "name": "Get_list_of_invoice_status",
    "description": "<p>This endpoint get list of invoice status</p>",
    "group": "InvoiceStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceStatus"
  },
  {
    "type": "put",
    "url": "/invoice/status/:id",
    "title": "Update invoice status",
    "name": "Update_invoice_status_data",
    "description": "<p>This endpoint update invoice status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoice status</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>invoice status</p>"
          }
        ]
      }
    },
    "group": "InvoiceStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/invoice/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "InvoiceStatus"
  },
  {
    "type": "put",
    "url": "/invoices/:id",
    "title": "Update invoice",
    "name": "Update_invoice_data",
    "description": "<p>This endpoint update invoice information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of invoice</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of invoice</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "invoice_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "counterparty_id",
            "description": ""
          }
        ]
      }
    },
    "group": "Invoice",
    "sampleRequest": [
      {
        "url": "/backend/api/invoices/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Invoice"
  },
  {
    "type": "get",
    "url": "/issue/{id}",
    "title": "Get issue by id",
    "name": "Get_issue_by_id",
    "description": "<p>This endpoint return issue by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue",
            "description": "<p>id of issue</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/:issue_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue"
  },
  {
    "type": "post",
    "url": "/issue",
    "title": "Insert issue",
    "name": "Insert_new_issue",
    "description": "<p>This endpoint insert new issue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start Date Time for issue, format(YYYY-MM-DD HH:MM:SS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>limit Date Time for issue, format (YYYY-MM-DD HH:MM:SS)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_important",
            "description": "<p>Numerical boolean value (1 = true, 0 = false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>Id of project</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>status of issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsible",
            "description": "<p>id of user who is responsible for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>id of user who created issue</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue"
  },
  {
    "type": "delete",
    "url": "/issue/{id}",
    "title": "Remove issue by id",
    "name": "Remove_issue_by_id",
    "description": "<p>This endpoint remove issue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue_id",
            "description": "<p>id of contact</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/:issue_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue"
  },
  {
    "type": "put",
    "url": "/issue/{id}",
    "title": "Update issue by id",
    "name": "Update_issue_by_id",
    "description": "<p>This endpoint update issue by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start Date Time for issue, format(YYYY-MM-DD HH:MM:SS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>limit Date Time for issue, format (YYYY-MM-DD HH:MM:SS)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>Id of project</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_important",
            "description": "<p>Numerical boolean value (1 = true, 0 = false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>status of issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsible",
            "description": "<p>id of user who is responsible for issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>id of user who created issue</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/:issue_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issue/status/{id}",
    "title": "Get issue status by id",
    "name": "Get_issue_status_by_id",
    "description": "<p>This endpoint return issue status by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue_status",
            "description": "<p>id of issue stratus</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/status/:issue_status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Status"
  },
  {
    "type": "post",
    "url": "/issue/status",
    "title": "Insert issue",
    "name": "Insert_new_issue_status",
    "description": "<p>This endpoint insert new issue status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue status</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Status"
  },
  {
    "type": "delete",
    "url": "/issue/status/{id}",
    "title": "Remove issue status by id",
    "name": "Remove_issue_status_by_id",
    "description": "<p>This endpoint remove issue status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue_status",
            "description": "<p>id of issue status</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/status/:issue_status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Status"
  },
  {
    "type": "put",
    "url": "/issue/{id}",
    "title": "Update issue status by id",
    "name": "Update_issue_status_by_id",
    "description": "<p>This endpoint update issue status by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue status</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/status/:issue_status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Status"
  },
  {
    "type": "get",
    "url": "/issue/type/{id}",
    "title": "Get issue type by id",
    "name": "Get_issue_type_by_id",
    "description": "<p>This endpoint return issue type by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue_type",
            "description": "<p>id of issue type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/type/:issue_type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Type"
  },
  {
    "type": "post",
    "url": "/issue/type",
    "title": "Insert issue type",
    "name": "Insert_new_issue_type",
    "description": "<p>This endpoint insert new issue type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Type"
  },
  {
    "type": "delete",
    "url": "/issue/type/{id}",
    "title": "Remove issue type by id",
    "name": "Remove_issue_type_by_id",
    "description": "<p>This endpoint remove issue type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "issue_type",
            "description": "<p>id of issue type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/:issue_type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Type"
  },
  {
    "type": "put",
    "url": "/issue/type/{id}",
    "title": "Update issue type by id",
    "name": "Update_issue_type_by_id",
    "description": "<p>This endpoint update issue type by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Issue_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title for issue type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/issue/type/:issue_type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Issue_Type"
  },
  {
    "type": "post",
    "url": "/language",
    "title": "Add new language",
    "name": "Add_new_language",
    "description": "<p>This endpoint add new language</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>of language</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of language</p>"
          }
        ]
      }
    },
    "group": "Language",
    "sampleRequest": [
      {
        "url": "/backend/api/language"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Language"
  },
  {
    "type": "delete",
    "url": "/language/:id",
    "title": "Delete language",
    "name": "Delete_language",
    "description": "<p>This endpoint delete language</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of language</p>"
          }
        ]
      }
    },
    "group": "Language",
    "sampleRequest": [
      {
        "url": "/backend/api/language/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Language"
  },
  {
    "type": "get",
    "url": "/language",
    "title": "Get list",
    "name": "Get_list_of_language",
    "description": "<p>This endpoint</p>",
    "group": "Language",
    "sampleRequest": [
      {
        "url": "/backend/api/language"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Language"
  },
  {
    "type": "put",
    "url": "/language/:id",
    "title": "Update language",
    "name": "Update_language_data",
    "description": "<p>This endpoint update language information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of language</p>"
          }
        ]
      }
    },
    "group": "Language",
    "sampleRequest": [
      {
        "url": "/backend/api/language/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Language"
  },
  {
    "type": "post",
    "url": "/leads",
    "title": "Add new lead",
    "name": "Add_new_lead",
    "description": "<p>This endpoint adds new lead</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>of lead</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "status_id",
            "description": "<p>of lead</p>"
          }
        ]
      }
    },
    "group": "Lead",
    "sampleRequest": [
      {
        "url": "/backend/api/leads/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead"
  },
  {
    "type": "delete",
    "url": "/leads/:id",
    "title": "Delete lead",
    "name": "Delete_lead_data",
    "description": "<p>This endpoint delete lead information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead</p>"
          }
        ]
      }
    },
    "group": "Lead",
    "sampleRequest": [
      {
        "url": "/backend/api/leads/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/lead/status",
    "title": "Add new lead/status",
    "name": "Add_new_lead_status",
    "description": "<p>This endpoint adds new lead/status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>lead status</p>"
          }
        ]
      }
    },
    "group": "LeadStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "LeadStatus"
  },
  {
    "type": "delete",
    "url": "/lead/status/:id",
    "title": "Delete lead status",
    "name": "Delete_lead_status_data",
    "description": "<p>This endpoint delete lead status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead status</p>"
          }
        ]
      }
    },
    "group": "LeadStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/status/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "LeadStatus"
  },
  {
    "type": "get",
    "url": "/lead/status",
    "title": "Get lead status",
    "name": "Get_list_of_lead_status",
    "description": "<p>This endpoint get list of lead status</p>",
    "group": "LeadStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "LeadStatus"
  },
  {
    "type": "put",
    "url": "/lead/status/:id",
    "title": "Update lead status",
    "name": "Update_lead_status_data",
    "description": "<p>This endpoint update lead status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead status</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>lead status</p>"
          }
        ]
      }
    },
    "group": "LeadStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "LeadStatus"
  },
  {
    "type": "put",
    "url": "/leads/:id",
    "title": "Update lead",
    "name": "Update_lead_data",
    "description": "<p>This endpoint update lead information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "status_id",
            "description": "<p>of lead</p>"
          }
        ]
      }
    },
    "group": "Lead",
    "sampleRequest": [
      {
        "url": "/backend/api/leads/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/lead/products",
    "title": "Add new lead product",
    "name": "Add_new_lead_product",
    "description": "<p>This endpoint add new lead product</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "lead_id",
            "description": "<p>id of lead</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>id of product</p>"
          }
        ]
      }
    },
    "group": "Lead_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead_Products"
  },
  {
    "type": "delete",
    "url": "/lead/products/:id",
    "title": "Delete lead product",
    "name": "Delete_lead_product",
    "description": "<p>This endpoint delete lead product</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead product</p>"
          }
        ]
      }
    },
    "group": "Lead_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead_Products"
  },
  {
    "type": "get",
    "url": "/lead/products",
    "title": "Get lead products",
    "name": "Get_lead_products",
    "description": "<p>This endpoint return lead products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Lead_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead_Products"
  },
  {
    "type": "put",
    "url": "/lead/products/:id",
    "title": "Update lead products",
    "name": "Update_leads_products",
    "description": "<p>This endpoint update lead products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of lead product</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lead_id",
            "description": "<p>id of lead</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>id of product</p>"
          }
        ]
      }
    },
    "group": "Lead_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/lead/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead_Products"
  },
  {
    "type": "delete",
    "url": "/leads/statuses/{id}",
    "title": "Delete lead status by id",
    "name": "Delete_lead_status_by_id",
    "description": "<p>This endpoint remove lead status from db</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Lead_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Lead status id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/leads/statuses/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Lead_Status"
  },
  {
    "type": "post",
    "url": "/measure",
    "title": "Add new measurement unit",
    "name": "Add_new_measurement_unit",
    "description": "<p>This endpoint create the new measurement unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Measure_Unit",
    "sampleRequest": [
      {
        "url": "/backend/api/measure"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Measure_Unit"
  },
  {
    "type": "delete",
    "url": "/measure/:id",
    "title": "Delete measurement unit",
    "name": "Delete_measurement_unit",
    "description": "<p>This endpoint delete measurement unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of measure unit</p>"
          }
        ]
      }
    },
    "group": "Measure_Unit",
    "sampleRequest": [
      {
        "url": "/backend/api/measure/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Measure_Unit"
  },
  {
    "type": "get",
    "url": "/measure",
    "title": "Get list with all measurements",
    "name": "Get_list_of_measurements",
    "description": "<p>This endpoint return list of measurements</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Measure_Unit",
    "sampleRequest": [
      {
        "url": "/backend/api/measure"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Measure_Unit"
  },
  {
    "type": "put",
    "url": "/measure/:id",
    "title": "Update measurement unit",
    "name": "Update_measurement_unit",
    "description": "<p>This endpoint update the information about measurement unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of measure unit (Required)</p>"
          }
        ]
      }
    },
    "group": "Measure_Unit",
    "sampleRequest": [
      {
        "url": "/backend/api/measure"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Measure_Unit"
  },
  {
    "type": "get",
    "url": "/metadata",
    "title": "Get all entity metaData",
    "name": "Get_all_entity_metadata",
    "description": "<p>This endpoint returns all metadata</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Accept-Language language</p>"
          }
        ]
      }
    },
    "group": "MetaData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>metadata version ex: 1509465836</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/metadata"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "MetaData"
  },
  {
    "type": "get",
    "url": "/metadata/:entity",
    "title": "Get metaData for entity",
    "name": "Get_metadata",
    "description": "<p>This endpoint returns metadata</p>",
    "group": "MetaData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entity",
            "description": "<p>name of entity</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/metadata/:entity"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "MetaData"
  },
  {
    "type": "get",
    "url": "/metadata/entities",
    "title": "Get list of entities for metadata",
    "name": "Get_metadata_entities",
    "description": "<p>This endpoint returns list of entities metadata</p>",
    "group": "MetaData",
    "sampleRequest": [
      {
        "url": "/backend/api/metadata/entities"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "MetaData"
  },
  {
    "type": "post",
    "url": "/module",
    "title": "Add new module",
    "name": "Add_new_product",
    "description": "<p>This endpoint create the new module</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of product (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>Code for module</p>"
          }
        ]
      }
    },
    "group": "Modules",
    "sampleRequest": [
      {
        "url": "backend/api/module"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Modules"
  },
  {
    "type": "delete",
    "url": "/module/:id",
    "title": "Delete module",
    "name": "Delete_module",
    "description": "<p>This endpoint delete the module</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of module</p>"
          }
        ]
      }
    },
    "group": "Modules",
    "sampleRequest": [
      {
        "url": "/backend/api/module/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Modules"
  },
  {
    "type": "put",
    "url": "/module/:id",
    "title": "Update module",
    "name": "Update_module",
    "description": "<p>This endpoint update the information about module</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of module (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of module</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>Code of module</p>"
          }
        ]
      }
    },
    "group": "Modules",
    "sampleRequest": [
      {
        "url": "/backend/api/module/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Modules"
  },
  {
    "type": "get",
    "url": "/notification/user/:user",
    "title": "Get all unreaded notifications",
    "name": "Get_all_unreaded_notifications",
    "description": "<p>This endpoint return all unreaded notifications</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "group": "Notification",
    "sampleRequest": [
      {
        "url": "/backend/api/notification/user/:user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/notification/refresh/",
    "title": "Add or Update last viewed notification",
    "name": "Update_last_viewed_notification",
    "description": "<p>This endpoint save information about last viewed notification</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Notification",
    "sampleRequest": [
      {
        "url": "/backend/api/notification/refresh"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/order/products",
    "title": "Add new product to assigned order",
    "name": "Add_new_product_to_order",
    "description": "<p>This endpoint add product to order</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "order_id",
            "description": "<p>id for order (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>id of product for order (Required)</p>"
          }
        ]
      }
    },
    "group": "Order_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/order/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Products"
  },
  {
    "type": "delete",
    "url": "/order/products/:id",
    "title": "Delete product from order",
    "name": "Delete_product_from_order",
    "description": "<p>This endpoint delete product from order</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order product</p>"
          }
        ]
      }
    },
    "group": "Order_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/order/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Products"
  },
  {
    "type": "put",
    "url": "/order/products/:id",
    "title": "Update products of order",
    "name": "Update_products_of_order",
    "description": "<p>This endpoint update the information of products for order</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order product</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "order_id",
            "description": "<p>id for order (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>id of product for order (Required)</p>"
          }
        ]
      }
    },
    "group": "Order_Products",
    "sampleRequest": [
      {
        "url": "/backend/api/order/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Products"
  },
  {
    "type": "post",
    "url": "/order/status",
    "title": "Add new order status",
    "name": "Add_new_order_status",
    "description": "<p>This endpoint add new order status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of order status</p>"
          }
        ]
      }
    },
    "group": "Order_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/order/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Status"
  },
  {
    "type": "delete",
    "url": "/order/status/:id",
    "title": "Delete order status",
    "name": "Delete_order_status",
    "description": "<p>This endpoint delete order status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order status</p>"
          }
        ]
      }
    },
    "group": "Order_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/order/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Status"
  },
  {
    "type": "get",
    "url": "/order/status",
    "title": "Get all order status",
    "name": "Get_all_order_status",
    "description": "<p>This endpoint return list of order status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Order_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/order/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Status"
  },
  {
    "type": "put",
    "url": "/order/status/:id",
    "title": "Update order status",
    "name": "Update_order_status",
    "description": "<p>This endpoint update the order status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order status</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of order status</p>"
          }
        ]
      }
    },
    "group": "Order_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/order/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Status"
  },
  {
    "type": "post",
    "url": "/order/types",
    "title": "Add new order type",
    "name": "Add_new_order_type",
    "description": "<p>This endpoint add new order type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of order type</p>"
          }
        ]
      }
    },
    "group": "Order_Types",
    "sampleRequest": [
      {
        "url": "/backend/api/order/types"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Types"
  },
  {
    "type": "delete",
    "url": "/order/types/:id",
    "title": "Delete order type",
    "name": "Delete_order_type",
    "description": "<p>This endpoint delete order type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order type</p>"
          }
        ]
      }
    },
    "group": "Order_Types",
    "sampleRequest": [
      {
        "url": "/backend/api/order/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Types"
  },
  {
    "type": "get",
    "url": "/order/types",
    "title": "Get all order types",
    "name": "Get_all_order_types",
    "description": "<p>This endpoint return list of order types</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Order_Types",
    "sampleRequest": [
      {
        "url": "/backend/api/order/types"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Types"
  },
  {
    "type": "put",
    "url": "/order/types/:id",
    "title": "Update order type",
    "name": "Update_order_type",
    "description": "<p>This endpoint update the order type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order type</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of order type</p>"
          }
        ]
      }
    },
    "group": "Order_Types",
    "sampleRequest": [
      {
        "url": "/backend/api/order/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Order_Types"
  },
  {
    "type": "post",
    "url": "/orders",
    "title": "Add new order",
    "name": "Add_new_order",
    "description": "<p>This endpoint create the new order</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of order</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "amount",
            "description": "<p>of order</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "sampleRequest": [
      {
        "url": "/backend/api/orders"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Orders"
  },
  {
    "type": "delete",
    "url": "/orders/:id",
    "title": "Delete order",
    "name": "Delete_order",
    "description": "<p>This endpoint delete order</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of order</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "sampleRequest": [
      {
        "url": "/backend/api/orders/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/order/products",
    "title": "Get all orders",
    "name": "Get_all_orders",
    "description": "<p>This endpoint return list of orders</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "sampleRequest": [
      {
        "url": "/backend/api/order/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/orders",
    "title": "Get all orders",
    "name": "Get_all_orders",
    "description": "<p>This endpoint return list of orders</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "sampleRequest": [
      {
        "url": "/backend/api/orders"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Orders"
  },
  {
    "type": "put",
    "url": "/orders/:id",
    "title": "Update order",
    "name": "Update_order",
    "description": "<p>This endpoint update the vat value</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of order</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "amount",
            "description": "<p>of order</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "sampleRequest": [
      {
        "url": "/backend/api/orders"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/payment/gateways",
    "title": "Add new payment gateway",
    "name": "Add_new_payment_gateway",
    "description": "<p>This endpoint adds new payment gateway</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>payment gateway</p>"
          }
        ]
      }
    },
    "group": "PaymentGateway",
    "sampleRequest": [
      {
        "url": "/backend/api/payment/gateways/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "PaymentGateway"
  },
  {
    "type": "delete",
    "url": "/payment/gateways/:id",
    "title": "Delete payment gateways",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete payment/gateways information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of payment gateways</p>"
          }
        ]
      }
    },
    "group": "PaymentGateway",
    "sampleRequest": [
      {
        "url": "/backend/api/payment/gateways/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "PaymentGateway"
  },
  {
    "type": "get",
    "url": "/payment/gateways",
    "title": "Get payment gateway",
    "name": "Get_list_of_payment_gateway",
    "description": "<p>This endpoint get list of payment gateway</p>",
    "group": "PaymentGateway",
    "sampleRequest": [
      {
        "url": "/backend/api/payment/gateways"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "PaymentGateway"
  },
  {
    "type": "put",
    "url": "/payment/gateways/:id",
    "title": "Update payment gateway",
    "name": "Update_payment_gateway_data",
    "description": "<p>This endpoint update payment gateway information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of payment gateway</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>payment gateway</p>"
          }
        ]
      }
    },
    "group": "PaymentGateway",
    "sampleRequest": [
      {
        "url": "/backend/api/payment/gateways/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "PaymentGateway"
  },
  {
    "type": "get",
    "url": "/role/available",
    "title": "Get list of available permissions for current user",
    "name": "Get_list_of_available_permissions_for_current_user",
    "description": "<p>This endpoint return list of available permissions for current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "sampleRequest": [
      {
        "url": "/backend/api/role/available"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "get",
    "url": "/permission",
    "title": "Get list of permissions",
    "name": "Get_list_of_permissions",
    "description": "<p>This endpoint return list of permissions</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "sampleRequest": [
      {
        "url": "/backend/api/permission"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "post",
    "url": "/permission",
    "title": "Insert new permission",
    "name": "Insert_new_permission",
    "description": "<p>This endpoint insert new permission</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[title]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/permission"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "delete",
    "url": "/permission/:id",
    "title": "Remove permission",
    "name": "Remove_permission",
    "description": "<p>This endpoint remove permission</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of permission</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/permission/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "put",
    "url": "/permission/:id",
    "title": "Update permission by id",
    "name": "Update_permission_by_id",
    "description": "<p>This endpoint update permission record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>for permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n[title]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/permission/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "post",
    "url": "/pm/board",
    "title": "Add new pm boards",
    "name": "Add_new_pm_boards",
    "description": "<p>This endpoint adds new pm boards</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "team_id",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "background",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "visibility_id",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>pm boards</p>"
          }
        ]
      }
    },
    "group": "PmBoards",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmBoards"
  },
  {
    "type": "get",
    "url": "/pm/board",
    "title": "Get pm boards",
    "name": "Get_list_of_pm_boards",
    "description": "<p>This endpoint get list of pm board</p>",
    "group": "PmBoards",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmBoards"
  },
  {
    "type": "put",
    "url": "/pm/board/:id",
    "title": "Update pm boards",
    "name": "Update_pm_boards_data",
    "description": "<p>This endpoint update pm boards information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "team_id",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "background",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "visibility_id",
            "description": "<p>pm boards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>pm boards</p>"
          }
        ]
      }
    },
    "group": "PmBoards",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmBoards"
  },
  {
    "type": "post",
    "url": "/pm/tasks/checklists",
    "title": "Add new checklist",
    "name": "Add_new_checklist",
    "description": "<p>This endpoint adds new checklist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>checklist title</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "task",
            "description": "<p>task task:{id:task_id}</p>"
          }
        ]
      }
    },
    "group": "PmChecklists",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/checklists"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklists"
  },
  {
    "type": "delete",
    "url": "/pm/tasks/checklists/:id",
    "title": "Delete checklist",
    "name": "Delete_checklist_data",
    "description": "<p>This endpoint delete checklist by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of checklist</p>"
          }
        ]
      }
    },
    "group": "PmChecklists",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/checklists/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklists"
  },
  {
    "type": "get",
    "url": "/pm/tasks/checklists",
    "title": "Get checklists",
    "name": "Get_list_of_checklists",
    "description": "<p>This endpoint get list of checklists</p>",
    "group": "PmChecklists",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/checklists"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklists"
  },
  {
    "type": "post",
    "url": "/pm/checklists/items",
    "title": "Add new checklist item",
    "name": "Add_new_checklist_item",
    "description": "<p>This endpoint adds new checklist item</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "content",
            "description": "<p>checklist title</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_done",
            "description": "<p>item is_done</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "priority",
            "description": "<p>item priority (float number for ordering items)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "checklist",
            "description": "<p>checklist checklist:{id:checklist_id}</p>"
          }
        ]
      }
    },
    "group": "PmChecklistsItems",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/checklists/items"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklistsItems"
  },
  {
    "type": "delete",
    "url": "/pm/checklists/items/:id",
    "title": "Delete checklist item",
    "name": "Delete_checklist_item",
    "description": "<p>This endpoint delete checklist item by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of checklist item</p>"
          }
        ]
      }
    },
    "group": "PmChecklistsItems",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/checklists/items/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklistsItems"
  },
  {
    "type": "get",
    "url": "/pm/checklists/items",
    "title": "Get checklists items",
    "name": "Get_list_of_checklists_items",
    "description": "<p>This endpoint get list of checklists items</p>",
    "group": "PmChecklistsItems",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/checklists/items"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklistsItems"
  },
  {
    "type": "put",
    "url": "/pm/checklists/items/:id",
    "title": "Update checklist item",
    "name": "Update_checklist_item_data",
    "description": "<p>This endpoint update pm checklist item</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>checklist item ID</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "content",
            "description": "<p>checklist item content</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_done",
            "description": "<p>item is_done</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "priority",
            "description": "<p>item priority (float number for ordering items)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "checklist",
            "description": "<p>checklist checklist:{id:checklist_id}</p>"
          }
        ]
      }
    },
    "group": "PmChecklistsItems",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/checklists/items/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklistsItems"
  },
  {
    "type": "put",
    "url": "/pm/tasks/checklists/:id",
    "title": "Update checklist",
    "name": "Update_checklist_data",
    "description": "<p>This endpoint update pm checklist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of checklist</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>checklist title</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "task",
            "description": "<p>task task:{id:task_id}</p>"
          }
        ]
      }
    },
    "group": "PmChecklists",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/checklists/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmChecklists"
  },
  {
    "type": "post",
    "url": "/pm/labels/colors",
    "title": "Add new colors",
    "name": "Add_new_colors",
    "description": "<p>This endpoint adds new colors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "color",
            "description": "<p>colors</p>"
          }
        ]
      }
    },
    "group": "PmColors",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/labels/colors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmColors"
  },
  {
    "type": "delete",
    "url": "/pm/labels/colors/:id",
    "title": "Delete color",
    "name": "Delete_color_data",
    "description": "<p>This endpoint delete color by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of color</p>"
          }
        ]
      }
    },
    "group": "PmColors",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/labels/colors/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmColors"
  },
  {
    "type": "get",
    "url": "/pm/labels/colors",
    "title": "Get colors",
    "name": "Get_list_of_label_colors",
    "description": "<p>This endpoint get list of colors</p>",
    "group": "PmColors",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/labels/colors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmColors"
  },
  {
    "type": "put",
    "url": "/pm/labels/colors/:id",
    "title": "Update colors",
    "name": "Update_colors_data",
    "description": "<p>This endpoint update pm colors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of color</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "color",
            "description": "<p>color title</p>"
          }
        ]
      }
    },
    "group": "PmColors",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/labels/colors/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmColors"
  },
  {
    "type": "post",
    "url": "/pm/board/labels",
    "title": "Add new labels",
    "name": "Add_new_labels",
    "description": "<p>This endpoint adds new labels</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "color",
            "description": "<p>color</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "board",
            "description": "<p>board</p>"
          }
        ]
      }
    },
    "group": "PmLabels",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/labels"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmLabels"
  },
  {
    "type": "delete",
    "url": "/pm/board/labels/:id",
    "title": "Delete label",
    "name": "Delete_label_data",
    "description": "<p>This endpoint delete label by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of label</p>"
          }
        ]
      }
    },
    "group": "PmLabels",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/labels/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmLabels"
  },
  {
    "type": "get",
    "url": "/pm/board/labels",
    "title": "Get labels",
    "name": "Get_list_of_label_labels",
    "description": "<p>This endpoint get list of labels</p>",
    "group": "PmLabels",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/labels"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmLabels"
  },
  {
    "type": "put",
    "url": "/pm/board/labels/:id",
    "title": "Update labels",
    "name": "Update_labels_data",
    "description": "<p>This endpoint update pm labels</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of label</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "color",
            "description": "<p>color</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "board",
            "description": "<p>board</p>"
          }
        ]
      }
    },
    "group": "PmLabels",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/board/labels/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmLabels"
  },
  {
    "type": "post",
    "url": "/pm/list",
    "title": "Add new pm list",
    "name": "Add_new_pm_list",
    "description": "<p>This endpoint adds new pm list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm list</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "board_id",
            "description": ""
          }
        ]
      }
    },
    "group": "PmList",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmList"
  },
  {
    "type": "delete",
    "url": "/pm/list/:id",
    "title": "Delete pm list",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete pm list information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm list</p>"
          }
        ]
      }
    },
    "group": "PmList",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/list/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmList"
  },
  {
    "type": "get",
    "url": "/pm/list",
    "title": "Get pm list",
    "name": "Get_list_of_pm_list",
    "description": "<p>This endpoint get list of pm board</p>",
    "group": "PmList",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmList"
  },
  {
    "type": "put",
    "url": "/pm/list/:id",
    "title": "Update pm list",
    "name": "Update_pm_list_data",
    "description": "<p>This endpoint update pm list information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm list</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm list</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "board_id",
            "description": ""
          }
        ]
      }
    },
    "group": "PmList",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/list/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmList"
  },
  {
    "type": "post",
    "url": "/pm/tasks/actions",
    "title": "Add new task action",
    "name": "Add_new_task_action",
    "description": "<p>This endpoint adds new task action</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>action code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n:[{title:title_text, message:message_text}]</p>"
          }
        ]
      }
    },
    "group": "PmTaskActions",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/actions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActions"
  },
  {
    "type": "delete",
    "url": "/pm/tasks/actions/:id",
    "title": "Delete task action",
    "name": "Delete_task_action",
    "description": "<p>This endpoint delete task action by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of task action</p>"
          }
        ]
      }
    },
    "group": "PmTaskActions",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/actions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActions"
  },
  {
    "type": "get",
    "url": "/pm/tasks/actions",
    "title": "Get tasks actions",
    "name": "Get_list_of_tasks_actions",
    "description": "<p>This endpoint get list of tasks actions</p>",
    "group": "PmTaskActions",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/actions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActions"
  },
  {
    "type": "put",
    "url": "/pm/tasks/actions/:id",
    "title": "Update task action",
    "name": "Update_task_action",
    "description": "<p>This endpoint update pm task action</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>task action ID</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>action code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n:[{title:title_text, message:message_text}]</p>"
          }
        ]
      }
    },
    "group": "PmTaskActions",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/actions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActions"
  },
  {
    "type": "post",
    "url": "/pm/tasks/activities",
    "title": "Add new task activity",
    "name": "Add_new_task_activity",
    "description": "<p>This endpoint adds new task activity</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "task",
            "description": "<p>task task:{id:task_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "checklist",
            "description": "<p>checklist checklist:{id: checklist_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>user user:{id:user_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "action",
            "description": "<p>action action:{id:action_id}</p>"
          }
        ]
      }
    },
    "group": "PmTaskActivity",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/activities"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActivity"
  },
  {
    "type": "get",
    "url": "/pm/tasks/activities",
    "title": "Get tasks activities",
    "name": "Get_list_of_tasks_activities",
    "description": "<p>This endpoint get list of tasks activities</p>",
    "group": "PmTaskActivity",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/activities"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskActivity"
  },
  {
    "type": "post",
    "url": "/pm/tasks/{task_id}/attachments",
    "title": "Add task attachments",
    "name": "Add_task_attachments",
    "description": "<p>This endpoint adds task attachments</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "attachments",
            "description": "<p>array of files</p>"
          }
        ]
      }
    },
    "group": "PmTaskAttachments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/:task/attachments"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskAttachments"
  },
  {
    "type": "delete",
    "url": "/pm/tasks/attachments/{id}",
    "title": "Delete task attachment",
    "name": "Delete_task_attachment",
    "description": "<p>This endpoint removes task attachment</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "PmTaskAttachments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/attachments/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskAttachments"
  },
  {
    "type": "post",
    "url": "/pm/tasks/comments",
    "title": "Add new task comment",
    "name": "Add_new_task_comment",
    "description": "<p>This endpoint adds new task comment</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "text",
            "description": "<p>comment text</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "parent",
            "description": "<p>parent comment parent:{id: parent_comment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "task",
            "description": "<p>task task:{id:task_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>user user:{id:user_id}</p>"
          }
        ]
      }
    },
    "group": "PmTaskComments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/comments"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskComments"
  },
  {
    "type": "delete",
    "url": "/pm/tasks/comments/:id",
    "title": "Delete task comment",
    "name": "Delete_task_comment",
    "description": "<p>This endpoint delete task comment by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of task comment</p>"
          }
        ]
      }
    },
    "group": "PmTaskComments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/comments/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskComments"
  },
  {
    "type": "get",
    "url": "/pm/tasks/comments",
    "title": "Get tasks comments",
    "name": "Get_list_of_tasks_comments",
    "description": "<p>This endpoint get list of tasks comments</p>",
    "group": "PmTaskComments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/comments"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskComments"
  },
  {
    "type": "put",
    "url": "/pm/tasks/comments/:id",
    "title": "Update task comment",
    "name": "Update_task_comment",
    "description": "<p>This endpoint update pm task comment</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>task comment ID</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text",
            "description": "<p>comment text</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "parent",
            "description": "<p>parent comment parent:{id: parent_comment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "task",
            "description": "<p>task task:{id:task_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>user user:{id:user_id}</p>"
          }
        ]
      }
    },
    "group": "PmTaskComments",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/comments/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTaskComments"
  },
  {
    "type": "post",
    "url": "/pm/tasks",
    "title": "Add new Task",
    "name": "Add_new_Task",
    "description": "<p>This endpoint adds new Task</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "due_date",
            "description": "<p>Task due_date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>Task creator user:{id: user_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "background",
            "description": "<p>Task background</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "attachment",
            "description": "<p>Task cover attachment:{id:attachment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "list",
            "description": "<p>Task List list:{id:attachment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "priority",
            "description": "<p>Task priority (float number)</p>"
          }
        ]
      }
    },
    "group": "PmTasks",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTasks"
  },
  {
    "type": "delete",
    "url": "/pm/tasks/:id",
    "title": "Delete Task",
    "name": "Delete_Task_data",
    "description": "<p>This endpoint delete Task by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of Task</p>"
          }
        ]
      }
    },
    "group": "PmTasks",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTasks"
  },
  {
    "type": "get",
    "url": "/pm/tasks",
    "title": "Get Tasks",
    "name": "Get_list_of_Tasks",
    "description": "<p>This endpoint get list of Tasks</p>",
    "group": "PmTasks",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTasks"
  },
  {
    "type": "put",
    "url": "/pm/tasks/:id",
    "title": "Update Tasks",
    "name": "Update_Tasks_data",
    "description": "<p>This endpoint update pm Tasks</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of Task</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "due_date",
            "description": "<p>Task due_date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>Task creator user:{id: user_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "background",
            "description": "<p>Task background</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "attachment",
            "description": "<p>Task cover attachment:{id:attachment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "list",
            "description": "<p>Task List list:{id:attachment_id}</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "priority",
            "description": "<p>Task priority (float number)</p>"
          }
        ]
      }
    },
    "group": "PmTasks",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/tasks/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTasks"
  },
  {
    "type": "post",
    "url": "/pm/team",
    "title": "Add new pm team",
    "name": "Add_new_pm_team",
    "description": "<p>This endpoint adds new pm team</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm team</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "PmTeam",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/team"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTeam"
  },
  {
    "type": "delete",
    "url": "/pm/team/:id",
    "title": "Delete pm board",
    "name": "Delete_payment_gateways_data",
    "description": "<p>This endpoint delete pm board information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm board</p>"
          }
        ]
      }
    },
    "group": "PmTeam",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/team/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTeam"
  },
  {
    "type": "get",
    "url": "/pm/team",
    "title": "Get pm team",
    "name": "Get_list_of_pm_team",
    "description": "<p>This endpoint get list of pm board</p>",
    "group": "PmTeam",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/team"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTeam"
  },
  {
    "type": "put",
    "url": "/pm/team/:id",
    "title": "Update pm team",
    "name": "Update_pm_team_data",
    "description": "<p>This endpoint update pm team information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of pm team</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>pm team</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "PmTeam",
    "sampleRequest": [
      {
        "url": "/backend/api/pm/team/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/pm_api.php",
    "groupTitle": "PmTeam"
  },
  {
    "type": "delete",
    "url": "/predefined_filters/:id",
    "title": "Delete predefined_filters",
    "name": "Delete_predefined_filters",
    "description": "<p>This endpoint delete predefined_filters</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of predefined_filters</p>"
          }
        ]
      }
    },
    "group": "Predefined_Filters",
    "sampleRequest": [
      {
        "url": "/backend/api/predefined_filters/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Predefined_Filters"
  },
  {
    "type": "post",
    "url": "/product",
    "title": "Add new product",
    "name": "Add_new_product",
    "description": "<p>This endpoint create the new product</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "price",
            "description": "<p>of product (Required)</p>"
          }
        ]
      }
    },
    "group": "Products",
    "sampleRequest": [
      {
        "url": "backend/api/product"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/product/:id",
    "title": "Delete product",
    "name": "Delete_product",
    "description": "<p>This endpoint delete the products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product</p>"
          }
        ]
      }
    },
    "group": "Products",
    "sampleRequest": [
      {
        "url": "/backend/api/product/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "/products/category",
    "title": "Add new product category",
    "name": "Add_new_product_category",
    "description": "<p>This endpoint create the new product category</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id (Required)</p>"
          }
        ]
      }
    },
    "group": "Products_Category",
    "sampleRequest": [
      {
        "url": "/backend/api/products/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Category"
  },
  {
    "type": "delete",
    "url": "/products/category/:id",
    "title": "Delete product category",
    "name": "Delete_product_category",
    "description": "<p>This endpoint delete product category</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product category</p>"
          }
        ]
      }
    },
    "group": "Products_Category",
    "sampleRequest": [
      {
        "url": "/backend/api/products/category/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Category"
  },
  {
    "type": "get",
    "url": "/products/category",
    "title": "Get list with all categories",
    "name": "Get_list_of_product_categories",
    "description": "<p>This endpoint return list of product categories</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Products_Category",
    "sampleRequest": [
      {
        "url": "/backend/api/products/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Category"
  },
  {
    "type": "get",
    "url": "/products/category",
    "title": "Get list with all categories",
    "name": "Get_list_of_product_categories",
    "description": "<p>This endpoint return list of product categories</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Products_Category",
    "sampleRequest": [
      {
        "url": "/backend/api/products/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Category"
  },
  {
    "type": "put",
    "url": "/products/category/:id",
    "title": "Update product category",
    "name": "Update_product_category",
    "description": "<p>This endpoint update the information about product category</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product category (Required)</p>"
          }
        ]
      }
    },
    "group": "Products_Category",
    "sampleRequest": [
      {
        "url": "/backend/api/products/category/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Category"
  },
  {
    "type": "post",
    "url": "/product/status",
    "title": "Add new product status",
    "name": "Add_new_product_status",
    "description": "<p>This endpoint create the new product status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "Products_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/product/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Status"
  },
  {
    "type": "delete",
    "url": "/product/status/:id",
    "title": "Delete product status",
    "name": "Delete_product_status",
    "description": "<p>This endpoint delete product status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product status</p>"
          }
        ]
      }
    },
    "group": "Products_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/product/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Status"
  },
  {
    "type": "get",
    "url": "/product/status",
    "title": "Get list with all statuses",
    "name": "Get_list_of_product_statuses",
    "description": "<p>This endpoint return list of product statuses</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Products_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/product/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Status"
  },
  {
    "type": "put",
    "url": "/product/status/:id",
    "title": "Update product status",
    "name": "Update_product_status",
    "description": "<p>This endpoint update the information about product status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product status (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "group": "Products_Status",
    "sampleRequest": [
      {
        "url": "/backend/api/product/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Products_Status"
  },
  {
    "type": "get",
    "url": "/projects",
    "title": "Get all projects",
    "name": "Get_all_projects",
    "description": "<p>This endpoint return all projects</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Project",
    "sampleRequest": [
      {
        "url": "/backend/api/projects"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/projects/{id}",
    "title": "Get project by id",
    "name": "Get_project_by_id",
    "description": "<p>This endpoint return project by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/projects/:project_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/projects/company/{company_id}",
    "title": "Get projects company",
    "name": "Get_projects_by_company",
    "description": "<p>This endpoint return projects by company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/projects/company/:company_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/projects",
    "title": "Insert new project",
    "name": "Insert_new_project",
    "description": "<p>This endpoint create new project</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start_time",
            "description": "<p>DateTime</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "deadline",
            "description": "<p>DateTime</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "estimation",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "estimation_unit",
            "description": "<p>One of values: minutes, hours, days</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_important",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_finished",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "responsible_user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "creator_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/projects"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/projects",
    "title": "Remove project by id",
    "name": "Remove_project_by_id",
    "description": "<p>This endpoint remove project by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/projects/:project_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/projects/{id}",
    "title": "Update project by id",
    "name": "Update_project_by_id",
    "description": "<p>This endpoint update project id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization project</p>"
          }
        ]
      }
    },
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start_time",
            "description": "<p>DateTime</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "deadline",
            "description": "<p>DateTime</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "project_manager_id",
            "description": "<p>Id of user who is project manager</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "estimation",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "estimation_unit",
            "description": "<p>One of values: minutes, hours, days</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_important",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_finished",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "creator_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/projects/:project_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/quotes",
    "title": "Add new quote",
    "name": "Add_new_quote",
    "description": "<p>This endpoint adds new quote</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of quote</p>"
          }
        ]
      }
    },
    "group": "Quote",
    "sampleRequest": [
      {
        "url": "/backend/api/quotes/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Quote"
  },
  {
    "type": "delete",
    "url": "/quotes/:id",
    "title": "Delete quote",
    "name": "Delete_quote_data",
    "description": "<p>This endpoint delete quote information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote</p>"
          }
        ]
      }
    },
    "group": "Quote",
    "sampleRequest": [
      {
        "url": "/backend/api/quotes/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Quote"
  },
  {
    "type": "get",
    "url": "/quotes",
    "title": "Get quotes",
    "name": "Get_list_of_quotes",
    "description": "<p>This endpoint get list of quotes</p>",
    "group": "Quote",
    "sampleRequest": [
      {
        "url": "/backend/api/quotes"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Quote"
  },
  {
    "type": "post",
    "url": "/quote/products",
    "title": "Add new quote products",
    "name": "Add_new_quote_products",
    "description": "<p>This endpoint adds new quote products</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "product_id",
            "description": "<p>of quote products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "quote_id",
            "description": "<p>of quote products</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "quantity",
            "description": "<p>of quote products</p>"
          }
        ]
      }
    },
    "group": "QuoteProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteProducts"
  },
  {
    "type": "delete",
    "url": "/quote/products/:id",
    "title": "Delete quote/products",
    "name": "Delete_quote_products_data",
    "description": "<p>This endpoint delete quote/products information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote/products</p>"
          }
        ]
      }
    },
    "group": "QuoteProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/products/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteProducts"
  },
  {
    "type": "get",
    "url": "/quote/products",
    "title": "Get quote status",
    "name": "Get_list_of_quote_status",
    "description": "<p>This endpoint get list of quote status</p>",
    "group": "QuoteProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/products"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteProducts"
  },
  {
    "type": "put",
    "url": "/quote/products/:id",
    "title": "Update quote/products",
    "name": "Update_quote_products_data",
    "description": "<p>This endpoint update quote/products information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote/products</p>"
          }
        ]
      }
    },
    "group": "QuoteProducts",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/products/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteProducts"
  },
  {
    "type": "post",
    "url": "/quote/status",
    "title": "Add new quote status",
    "name": "Add_new_quote_status",
    "description": "<p>This endpoint adds new quote status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of quote status</p>"
          }
        ]
      }
    },
    "group": "QuoteStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteStatus"
  },
  {
    "type": "delete",
    "url": "/quote/status/:id",
    "title": "Delete quote/status",
    "name": "Delete_quote_status_data",
    "description": "<p>This endpoint delete quote/status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote/status</p>"
          }
        ]
      }
    },
    "group": "QuoteStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/status/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteStatus"
  },
  {
    "type": "get",
    "url": "/quote/status",
    "title": "Get quote status",
    "name": "Get_list_of_quote_status",
    "description": "<p>This endpoint get list of quote status</p>",
    "group": "QuoteStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteStatus"
  },
  {
    "type": "put",
    "url": "/quote/status/:id",
    "title": "Update quote/status",
    "name": "Update_quote_status_data",
    "description": "<p>This endpoint update quote/status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote/status</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>of quote status</p>"
          }
        ]
      }
    },
    "group": "QuoteStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/quote/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "QuoteStatus"
  },
  {
    "type": "put",
    "url": "/quotes/:id",
    "title": "Update quote",
    "name": "Update_quote_data",
    "description": "<p>This endpoint update quote information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of quote</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>of quote</p>"
          }
        ]
      }
    },
    "group": "Quote",
    "sampleRequest": [
      {
        "url": "/backend/api/quotes/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Quote"
  },
  {
    "type": "post",
    "url": "/rates",
    "title": "Add new rate",
    "name": "Add_new_rate",
    "description": "<p>This endpoint adds new rate</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "Rate",
    "sampleRequest": [
      {
        "url": "/backend/api/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Rate"
  },
  {
    "type": "delete",
    "url": "/rates/:id",
    "title": "Delete rate",
    "name": "Delete_rate_data",
    "description": "<p>This endpoint delete rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate</p>"
          }
        ]
      }
    },
    "group": "Rate",
    "sampleRequest": [
      {
        "url": "/backend/api/rates/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Rate"
  },
  {
    "type": "get",
    "url": "/rates",
    "title": "Get rates",
    "name": "Get_list_of_rates",
    "description": "<p>This endpoint get list of rates</p>",
    "group": "Rate",
    "sampleRequest": [
      {
        "url": "/backend/api/rates"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Rate"
  },
  {
    "type": "post",
    "url": "/rate/history",
    "title": "Add new rate history",
    "name": "Add_new_rate_history",
    "description": "<p>This endpoint adds new rate history</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "rate_id",
            "description": ""
          }
        ]
      }
    },
    "group": "RateHistory",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/history/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateHistory"
  },
  {
    "type": "delete",
    "url": "/rate/history/:id",
    "title": "Delete rate history",
    "name": "Delete_rate_history_data",
    "description": "<p>This endpoint delete rate history information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate history</p>"
          }
        ]
      }
    },
    "group": "RateHistory",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/history/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateHistory"
  },
  {
    "type": "get",
    "url": "/rate/history",
    "title": "Get rates history",
    "name": "Get_list_of_rates_history",
    "description": "<p>This endpoint get list of rates history</p>",
    "group": "RateHistory",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/history"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateHistory"
  },
  {
    "type": "put",
    "url": "/rate/history/:id",
    "title": "Update rate history",
    "name": "Update_rate_history_data",
    "description": "<p>This endpoint update rate history information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate history</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "RateHistory",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/history/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateHistory"
  },
  {
    "type": "post",
    "url": "/rate/types",
    "title": "Add new rate type",
    "name": "Add_new_rate_type",
    "description": "<p>This endpoint adds new rate type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "RateType",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateType"
  },
  {
    "type": "delete",
    "url": "/rate/types/:id",
    "title": "Delete rate type",
    "name": "Delete_rate_type_data",
    "description": "<p>This endpoint delete rate type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate type</p>"
          }
        ]
      }
    },
    "group": "RateType",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/types/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateType"
  },
  {
    "type": "get",
    "url": "/rate/types",
    "title": "Get rate type",
    "name": "Get_list_of_rate_types",
    "description": "<p>This endpoint get list of rate types</p>",
    "group": "RateType",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/types"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateType"
  },
  {
    "type": "put",
    "url": "/rate/types/:id",
    "title": "Update rate type",
    "name": "Update_rate_type_data",
    "description": "<p>This endpoint update rate type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate type</p>"
          }
        ]
      }
    },
    "group": "RateType",
    "sampleRequest": [
      {
        "url": "/backend/api/rate/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RateType"
  },
  {
    "type": "put",
    "url": "/rates/:id",
    "title": "Update rate",
    "name": "Update_rate_data",
    "description": "<p>This endpoint update rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of rate</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "Rate",
    "sampleRequest": [
      {
        "url": "/backend/api/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Rate"
  },
  {
    "type": "post",
    "url": "/role/permission",
    "title": "Assign permission to role",
    "name": "Assign_permission_to_role",
    "description": "<p>This endpoint assign permission to role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions[]",
            "description": "<p>for role, example(&quot;permissions&quot;:[{&quot;id&quot;:10},{&quot;id&quot;:12}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "role[id]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/permission"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "POST",
    "url": "/department/role",
    "title": "Assign role to department",
    "name": "Assign_role_to_department",
    "description": "<p>This endpoint assign role to department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "department[id]",
            "description": "<p>the value for this parameter is object with id parameter, example: {id:2}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "role[id]",
            "description": "<p>the value for this parameter is object with id parameter, example: {id:1}</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/department/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/role/:id/permissions",
    "title": "Get list of permissions for role",
    "name": "Get_list_of_permissions_for_role",
    "description": "<p>This endpoint return list of permissions for role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>for role</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "sampleRequest": [
      {
        "url": "/backend/api/role/:id/permissions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/role",
    "title": "Get list of roles",
    "name": "Get_list_of_roles",
    "description": "<p>This endpoint return list of roles</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "sampleRequest": [
      {
        "url": "/backend/api/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "Insert new role",
    "name": "Insert_new_role",
    "description": "<p>This endpoint insert new role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[title]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "delete",
    "url": "/role/:role/permission/:permission",
    "title": "Remove permission from role",
    "name": "Remove_permission_from_role",
    "description": "<p>This endpoint remove permission from role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>id of role</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "permission",
            "description": "<p>id of permission</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/role/:role/permission/:permission"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "delete",
    "url": "/role/:id",
    "title": "Remove role",
    "name": "Remove_role",
    "description": "<p>This endpoint remove role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of role</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/role/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "DELETE",
    "url": "/department/:department/role/:role",
    "title": "Remove role from department",
    "name": "Remove_role_from_department",
    "description": "<p>This endpoint removes role from department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "department",
            "description": "<p>department id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>role id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/department/:department/role/:role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "put",
    "url": "/role/:id",
    "title": "Update role by id",
    "name": "Update_role_by_id",
    "description": "<p>This endpoint update role record selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code for role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "i18n[title]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/role/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "/room/files",
    "title": "Add new room files",
    "name": "Add_new_room_files",
    "description": "<p>This endpoint adds new room files</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room.id",
            "description": "<ul> <li>required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message.id",
            "description": "<ul> <li>required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company.id",
            "description": "<ul> <li>required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "url",
            "description": "<ul> <li>required</li> </ul>"
          }
        ]
      }
    },
    "group": "RoomFiles",
    "sampleRequest": [
      {
        "url": "/backend/api/room/files/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomFiles"
  },
  {
    "type": "delete",
    "url": "/room/files/:id",
    "title": "Delete room files",
    "name": "Delete_room_files_data",
    "description": "<p>This endpoint delete room files information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room files</p>"
          }
        ]
      }
    },
    "group": "RoomFiles",
    "sampleRequest": [
      {
        "url": "/backend/api/room/files/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomFiles"
  },
  {
    "type": "get",
    "url": "/room/files",
    "title": "Get room files",
    "name": "Get_list_of_room_files",
    "description": "<p>This endpoint get list of room files</p>",
    "group": "RoomFiles",
    "sampleRequest": [
      {
        "url": "/backend/api/room/files"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomFiles"
  },
  {
    "type": "put",
    "url": "/room/files/:id",
    "title": "Update room files",
    "name": "Update_room_files_data",
    "description": "<p>This endpoint update room files information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room files</p>"
          }
        ]
      }
    },
    "group": "RoomFiles",
    "sampleRequest": [
      {
        "url": "/backend/api/room/files/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomFiles"
  },
  {
    "type": "post",
    "url": "/room/messages",
    "title": "Add new room messages",
    "name": "Add_new_room_messages",
    "description": "<p>This endpoint adds new room messages</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "room.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "RoomMessages",
    "sampleRequest": [
      {
        "url": "/backend/api/room/messages/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomMessages"
  },
  {
    "type": "delete",
    "url": "/room/messages/:id",
    "title": "Delete room messagess",
    "name": "Delete_room_messages_data",
    "description": "<p>This endpoint delete room messagess information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room messages</p>"
          }
        ]
      }
    },
    "group": "RoomMessages",
    "sampleRequest": [
      {
        "url": "/backend/api/room/messages/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomMessages"
  },
  {
    "type": "get",
    "url": "/room/messages",
    "title": "Get room messages",
    "name": "Get_list_of_room_messages",
    "description": "<p>This endpoint get list of room messages</p>",
    "group": "RoomMessages",
    "sampleRequest": [
      {
        "url": "/backend/api/room/messages"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomMessages"
  },
  {
    "type": "put",
    "url": "/room/messages/:id",
    "title": "Update room messages",
    "name": "Update_room_messages_data",
    "description": "<p>This endpoint update room messages information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room messages</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "RoomMessages",
    "sampleRequest": [
      {
        "url": "/backend/api/room/messages/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomMessages"
  },
  {
    "type": "post",
    "url": "/room/users",
    "title": "Add new room users",
    "name": "Add_new_room_users",
    "description": "<p>This endpoint adds new room users</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room.id",
            "description": "<ul> <li>required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>required</li> </ul>"
          }
        ]
      }
    },
    "group": "RoomUsers",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomUsers"
  },
  {
    "type": "delete",
    "url": "/room/users/:id",
    "title": "Delete room users",
    "name": "Delete_room_users_data",
    "description": "<p>This endpoint delete room users information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room users</p>"
          }
        ]
      }
    },
    "group": "RoomUsers",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomUsers"
  },
  {
    "type": "get",
    "url": "/room/users",
    "title": "Get room users",
    "name": "Get_list_of_room_users",
    "description": "<p>This endpoint get list of room users</p>",
    "group": "RoomUsers",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomUsers"
  },
  {
    "type": "put",
    "url": "/room/users/:id",
    "title": "Update room users",
    "name": "Update_room_users_data",
    "description": "<p>This endpoint update room users information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of room users</p>"
          }
        ]
      }
    },
    "group": "RoomUsers",
    "sampleRequest": [
      {
        "url": "/backend/api/room/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "RoomUsers"
  },
  {
    "type": "post",
    "url": "/salutations",
    "title": "Add new salutation",
    "name": "Add_new_salutation",
    "description": "<p>This endpoint adds new salutation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Salutation",
    "sampleRequest": [
      {
        "url": "/backend/api/salutations/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Salutation"
  },
  {
    "type": "delete",
    "url": "/salutations/:id",
    "title": "Delete salutation",
    "name": "Delete_salutation_data",
    "description": "<p>This endpoint delete salutation information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of salutation</p>"
          }
        ]
      }
    },
    "group": "Salutation",
    "sampleRequest": [
      {
        "url": "/backend/api/salutations/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Salutation"
  },
  {
    "type": "get",
    "url": "/salutations",
    "title": "Get salutations",
    "name": "Get_list_of_salutations",
    "description": "<p>This endpoint get list of salutations</p>",
    "group": "Salutation",
    "sampleRequest": [
      {
        "url": "/backend/api/salutations"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Salutation"
  },
  {
    "type": "put",
    "url": "/salutations/:id",
    "title": "Update salutation",
    "name": "Update_salutation_data",
    "description": "<p>This endpoint update salutation information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of salutation</p>"
          }
        ]
      }
    },
    "group": "Salutation",
    "sampleRequest": [
      {
        "url": "/backend/api/salutations/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Salutation"
  },
  {
    "type": "post",
    "url": "/setting",
    "title": "Add new setting",
    "name": "Add_new_setting",
    "description": "<p>This endpoint adds new setting</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>lead status</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/setting/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "delete",
    "url": "/setting/:id",
    "title": "Delete setting",
    "name": "Delete_setting_data",
    "description": "<p>This endpoint delete setting information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of setting</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/setting/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "GET",
    "url": "/company/settings/:code",
    "title": "Get company setting by code",
    "name": "Get_company_setting_by_code",
    "description": "<p>This endpoint return setting for current company by code</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>setting code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/company/settings/:code"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/setting",
    "title": "Get setting",
    "name": "Get_list_of_setting",
    "description": "<p>This endpoint get list of setting</p>",
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/setting"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Get list of settings",
    "name": "Get_list_of_settings",
    "description": "<p>This endpoint return list of settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Get list of company settings",
    "name": "Get_list_of_settings",
    "description": "<p>This endpoint return list of settings</p>",
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Get list of company settings",
    "name": "Get_list_of_settings",
    "description": "<p>This endpoint return list of settings</p>",
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "GET",
    "url": "/user/settings/:code",
    "title": "Get setting by code",
    "name": "Get_setting_by_code_for_current_user",
    "description": "<p>This endpoint return setting with value by code for current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>setting code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/user/settings/:code"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "GET",
    "url": "/company/settings",
    "title": "Get settings for company",
    "name": "Get_settings_for_company",
    "description": "<p>This endpoint returns settings of company if current user is admin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/company/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "post",
    "url": "/user/settings",
    "title": "Set setting value for user",
    "name": "Set_setting_value_current_user",
    "description": "<p>This endpoint insert new setting</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "setting",
            "description": "<p>created from combiantion of setting code and value example (language:1,menu_height:200)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/user/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "POST",
    "url": "/company/settings",
    "title": "Set setting value for company",
    "name": "Set_setting_value_for_company",
    "description": "<p>This endpoint set setting value for company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>is combination between setting code and value, example ({&quot;language&quot;:2,&quot;menu_height&quot;:400})</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/company/settings"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "put",
    "url": "/setting/:id",
    "title": "Update setting",
    "name": "Update_setting_data",
    "description": "<p>This endpoint update setting information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of setting</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": "<p>setting</p>"
          }
        ]
      }
    },
    "group": "Settings",
    "sampleRequest": [
      {
        "url": "/backend/api/setting/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Settings"
  },
  {
    "type": "post",
    "url": "/shards",
    "title": "Add new shards",
    "name": "Add_new_shards",
    "description": "<p>This endpoint add new shards</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "country",
            "description": ""
          }
        ]
      }
    },
    "group": "Shard",
    "sampleRequest": [
      {
        "url": "/backend/api/shards"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Shard"
  },
  {
    "type": "delete",
    "url": "/shards/:id",
    "title": "Delete shards",
    "name": "Delete_shards",
    "description": "<p>This endpoint delete shards</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of shards</p>"
          }
        ]
      }
    },
    "group": "Shard",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Shard"
  },
  {
    "type": "get",
    "url": "/shards",
    "title": "Get list",
    "name": "Get_list_of_shards",
    "description": "<p>This endpoint</p>",
    "group": "Shard",
    "sampleRequest": [
      {
        "url": "/backend/api/shards"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Shard"
  },
  {
    "type": "get",
    "url": "/configuration/shards",
    "title": "Get shardss configuration",
    "name": "Get_list_of_shardss_configuration",
    "description": "<p>This endpoint get list of shards configuration</p>",
    "group": "Shard",
    "sampleRequest": [
      {
        "url": "/backend/api/configuration/shards"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Shard"
  },
  {
    "type": "post",
    "url": "/shards/services",
    "title": "Add new shards/services",
    "name": "Add_new_shards_services",
    "description": "<p>This endpoint add new shards/services</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "shards_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "service_type",
            "description": ""
          }
        ]
      }
    },
    "group": "ShardService",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/services"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ShardService"
  },
  {
    "type": "delete",
    "url": "/shards/services/:id",
    "title": "Delete shards/services",
    "name": "Delete_shards_services",
    "description": "<p>This endpoint delete shards/services</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of shards/services</p>"
          }
        ]
      }
    },
    "group": "ShardService",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/services/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ShardService"
  },
  {
    "type": "get",
    "url": "/shards/services",
    "title": "Get list",
    "name": "Get_list_of_shards_services",
    "description": "<p>This endpoint get list of shards services</p>",
    "group": "ShardService",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/services"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ShardService"
  },
  {
    "type": "put",
    "url": "/shards/services/:id",
    "title": "Update shards/services",
    "name": "Update_shards_services_data",
    "description": "<p>This endpoint update shards/services information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of shards/services</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "shards_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "service_type",
            "description": ""
          }
        ]
      }
    },
    "group": "ShardService",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/services/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "ShardService"
  },
  {
    "type": "put",
    "url": "/shards/:id",
    "title": "Update shards",
    "name": "Update_shards_data",
    "description": "<p>This endpoint update shards information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of shards</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "country",
            "description": ""
          }
        ]
      }
    },
    "group": "Shard",
    "sampleRequest": [
      {
        "url": "/backend/api/shards/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Shard"
  },
  {
    "type": "post",
    "url": "/states",
    "title": "Add new state",
    "name": "Add_new_state",
    "description": "<p>This endpoint adds new state</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "group": "State",
    "sampleRequest": [
      {
        "url": "/backend/api/states/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "State"
  },
  {
    "type": "delete",
    "url": "/states/:id",
    "title": "Delete state",
    "name": "Delete_state_data",
    "description": "<p>This endpoint delete state information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of state</p>"
          }
        ]
      }
    },
    "group": "State",
    "sampleRequest": [
      {
        "url": "/backend/api/states/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "State"
  },
  {
    "type": "get",
    "url": "/states",
    "title": "Get states",
    "name": "Get_list_of_states",
    "description": "<p>This endpoint get list of states</p>",
    "group": "State",
    "sampleRequest": [
      {
        "url": "/backend/api/states"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "State"
  },
  {
    "type": "put",
    "url": "/states/:id",
    "title": "Update state",
    "name": "Update_state_data",
    "description": "<p>This endpoint update state information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of state</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "group": "State",
    "sampleRequest": [
      {
        "url": "/backend/api/states/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "State"
  },
  {
    "type": "get",
    "url": "/import/currencies",
    "title": "Import currencies",
    "name": "Get_list_of_currencies",
    "description": "<p>This endpoint get list of currencies</p>",
    "group": "TaxHelper",
    "sampleRequest": [
      {
        "url": "/backend/api/import/currencies"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxHelper"
  },
  {
    "type": "get",
    "url": "/import/currency/rate",
    "title": "Import currencies rates",
    "name": "Get_list_of_currencies_rates",
    "description": "<p>This endpoint get list of currencies rates</p>",
    "group": "TaxHelper",
    "sampleRequest": [
      {
        "url": "/backend/api/import/currency/rate"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxHelper"
  },
  {
    "type": "get",
    "url": "/import/vat/eu",
    "title": "Import vat for EU countries",
    "name": "Get_list_of_vat_for_EU_countries",
    "description": "<p>This endpoint get list of vat for EU countries</p>",
    "group": "TaxHelper",
    "sampleRequest": [
      {
        "url": "/backend/api/import/vat/eu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxHelper"
  },
  {
    "type": "post",
    "url": "/tax/rates",
    "title": "Add new tax rate",
    "name": "Add_new_tax_rate",
    "description": "<p>This endpoint adds new tax rate</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "TaxRate",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRate"
  },
  {
    "type": "delete",
    "url": "/tax/rates/:id",
    "title": "Delete tax rate",
    "name": "Delete_tax_rate_data",
    "description": "<p>This endpoint delete tax rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of tax rate</p>"
          }
        ]
      }
    },
    "group": "TaxRate",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rates/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRate"
  },
  {
    "type": "get",
    "url": "/tax/rates",
    "title": "Get tax rates",
    "name": "Get_list_of_tax_rates",
    "description": "<p>This endpoint get list of tax rates</p>",
    "group": "TaxRate",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rates"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRate"
  },
  {
    "type": "put",
    "url": "/tax/rates/:id",
    "title": "Update tax rate",
    "name": "Update_tax_rate_data",
    "description": "<p>This endpoint update tax rate information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of tax rate</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "TaxRate",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rates/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRate"
  },
  {
    "type": "post",
    "url": "/tax/rules",
    "title": "Add new tax rule",
    "name": "Add_new_tax_rule",
    "description": "<p>This endpoint adds new tax rule</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "TaxRule",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rules/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRule"
  },
  {
    "type": "delete",
    "url": "/tax/rules/:id",
    "title": "Delete tax rule",
    "name": "Delete_tax_rule_data",
    "description": "<p>This endpoint delete tax rule information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of tax rule</p>"
          }
        ]
      }
    },
    "group": "TaxRule",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rules/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRule"
  },
  {
    "type": "get",
    "url": "/tax/rules",
    "title": "Get tax rules",
    "name": "Get_list_of_tax_rules",
    "description": "<p>This endpoint get list of tax rules</p>",
    "group": "TaxRule",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rules"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRule"
  },
  {
    "type": "put",
    "url": "/tax/rules/:id",
    "title": "Update tax rule",
    "name": "Update_tax_rule_data",
    "description": "<p>This endpoint update tax rule information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of tax rule</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tax_rate",
            "description": ""
          }
        ]
      }
    },
    "group": "TaxRule",
    "sampleRequest": [
      {
        "url": "/backend/api/tax/rules/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TaxRule"
  },
  {
    "type": "post",
    "url": "telegram/bot",
    "title": "Configure telegram bot to company",
    "name": "Add_company_telegram_Bot",
    "description": "<p>Add company telegram Bot</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Telegram bot token</p>"
          }
        ]
      }
    },
    "group": "Telegram",
    "sampleRequest": [
      {
        "url": "/backend/api/telegram/bot"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "post",
    "url": "/telegram/edit/text",
    "title": "Edit text message",
    "name": "Edit_text_message_from_Evrica_Chat_to_Telegram_chat",
    "description": "<p>This endpoint edit text message from Evrica Chat to Telegram chat</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>Id of chat room</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text",
            "description": "<p>Text of message</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Telegram chat id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company ID</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message_id",
            "description": "<p>Id of telegram message</p>"
          }
        ]
      }
    },
    "group": "Telegram",
    "sampleRequest": [
      {
        "url": "/telegram/edit/text"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "get",
    "url": "/telegram/bot/{company_id}",
    "title": "get bot by company_id",
    "name": "Get_telegram_bot_info_by_company_id",
    "description": "<p>This endpoint return telegram bot info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company ID</p>"
          }
        ]
      }
    },
    "group": "Telegram",
    "sampleRequest": [
      {
        "url": "/telegram/bot/:company_id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "delete",
    "url": "telegram/bot/{id}",
    "title": "Remove telegram bot",
    "name": "Remove_telegram_bot",
    "description": "<p>Remove telegram bot</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Telegram Bot id</p>"
          }
        ]
      }
    },
    "group": "Telegram",
    "sampleRequest": [
      {
        "url": "/backend/api/telegram/bot/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "post",
    "url": "/telegram/send/file",
    "title": "Send file message",
    "name": "Send_File_from_Evrica_Chat_to_Telegram_chat",
    "description": "<p>This endpoint send file message from Evrica Chat to Telegram chat</p>",
    "group": "Telegram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "room_id",
            "description": "<p>Room Id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "file",
            "description": "<p>File to send</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Telegram chat id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/telegram/send/file"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "post",
    "url": "/telegram/send/text",
    "title": "Send text message",
    "name": "Send_text_message_from_Evrica_Chat_to_Telegram_chat",
    "description": "<p>This endpoint send text message from Evrica Chat to Telegram chat</p>",
    "group": "Telegram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "text",
            "description": "<p>Text of message</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Telegram chat id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/telegram/send/text"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Telegram"
  },
  {
    "type": "get",
    "url": "/test/items",
    "title": "Get list of models",
    "name": "Get_list_of_models_entities",
    "description": "<p>This enpoint return list of entities/models of system</p>",
    "group": "Test",
    "sampleRequest": [
      {
        "url": "/backend/api/test/items"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "/test/factory/:model/:count",
    "title": "Insert random data to entities",
    "name": "Insert_random_data_to_models",
    "description": "<p>This enpoint add random data to model</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "model",
            "description": "<p>entity</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "count",
            "description": "<p>number of items to add</p>"
          }
        ]
      }
    },
    "group": "Test",
    "sampleRequest": [
      {
        "url": "/backend/api/test/factory/:model/:count"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Test"
  },
  {
    "type": "post",
    "url": "/test/generate/template",
    "title": "Translate template",
    "name": "Translate_template",
    "description": "<p>This endpoint translate given template</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "template",
            "description": "<p>translatable values</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "language_id",
            "description": "<p>id of language</p>"
          }
        ]
      }
    },
    "group": "Test",
    "sampleRequest": [
      {
        "url": "/test/generate/template"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Test"
  },
  {
    "type": "post",
    "url": "/test/translate",
    "title": "Translate variable by key",
    "name": "Translate_variable",
    "description": "<p>This endpoint translate given variable by key</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>variable key</p>"
          }
        ]
      }
    },
    "group": "Test",
    "sampleRequest": [
      {
        "url": "/test/translate"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Test"
  },
  {
    "type": "post",
    "url": "/transactions",
    "title": "Add new transaction",
    "name": "Add_new_transaction",
    "description": "<p>This endpoint adds new transaction</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "amount",
            "description": "<p>of transaction</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "gateway_id",
            "description": "<p>of transaction</p>"
          }
        ]
      }
    },
    "group": "Transaction",
    "sampleRequest": [
      {
        "url": "/backend/api/transactions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Transaction"
  },
  {
    "type": "delete",
    "url": "/transactions/:id",
    "title": "Delete transaction",
    "name": "Delete_transaction_data",
    "description": "<p>This endpoint delete transaction information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction</p>"
          }
        ]
      }
    },
    "group": "Transaction",
    "sampleRequest": [
      {
        "url": "/backend/api/transactions/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/transactions",
    "title": "Get transactions",
    "name": "Get_list_of_transactions",
    "description": "<p>This endpoint get list of transactions</p>",
    "group": "Transaction",
    "sampleRequest": [
      {
        "url": "/backend/api/transactions"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "/transaction/status",
    "title": "Add new transaction/status",
    "name": "Add_new_transaction_status",
    "description": "<p>This endpoint adds new transaction/status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "TransactionStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionStatus"
  },
  {
    "type": "delete",
    "url": "/transaction/status/:id",
    "title": "Delete transaction/status",
    "name": "Delete_transaction_status_data",
    "description": "<p>This endpoint delete transaction/status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction/status</p>"
          }
        ]
      }
    },
    "group": "TransactionStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/status/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionStatus"
  },
  {
    "type": "get",
    "url": "/transaction/status",
    "title": "Get transaction status",
    "name": "Get_list_of_transaction_status",
    "description": "<p>This endpoint get list of transaction status</p>",
    "group": "TransactionStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/status"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionStatus"
  },
  {
    "type": "put",
    "url": "/transaction/status/:id",
    "title": "Update transaction/status",
    "name": "Update_transaction_status_data",
    "description": "<p>This endpoint update transaction/status information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction/status</p>"
          }
        ]
      }
    },
    "group": "TransactionStatus",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/status/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionStatus"
  },
  {
    "type": "post",
    "url": "/transaction/types",
    "title": "Add new transaction/type",
    "name": "Add_new_transaction_type",
    "description": "<p>This endpoint adds new transaction/type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "TransactionTypes",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionTypes"
  },
  {
    "type": "delete",
    "url": "/transaction/types/:id",
    "title": "Delete transaction/type",
    "name": "Delete_transaction_type_data",
    "description": "<p>This endpoint delete transaction/type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction/type</p>"
          }
        ]
      }
    },
    "group": "TransactionTypes",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/types/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionTypes"
  },
  {
    "type": "get",
    "url": "/transaction/types",
    "title": "Get transaction type",
    "name": "Get_list_of_transaction_type",
    "description": "<p>This endpoint get list of transaction type</p>",
    "group": "TransactionTypes",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/types"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionTypes"
  },
  {
    "type": "put",
    "url": "/transaction/types/:id",
    "title": "Update transaction/type",
    "name": "Update_transaction_type_data",
    "description": "<p>This endpoint update transaction/type information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction/type</p>"
          }
        ]
      }
    },
    "group": "TransactionTypes",
    "sampleRequest": [
      {
        "url": "/backend/api/transaction/types/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TransactionTypes"
  },
  {
    "type": "put",
    "url": "/transactions/:id",
    "title": "Update transaction",
    "name": "Update_transaction_data",
    "description": "<p>This endpoint update transaction information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of transaction</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "amount",
            "description": "<p>of transaction</p>"
          }
        ]
      }
    },
    "group": "Transaction",
    "sampleRequest": [
      {
        "url": "/backend/api/transactions/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/translation",
    "title": "Get list of translation",
    "name": "Get_list_of_errors",
    "description": "<p>This endpoint return list of errors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of translation</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/translation"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Translation"
  },
  {
    "type": "post",
    "url": "/translation",
    "title": "Insert new translation",
    "name": "Insert_new_translation",
    "description": "<p>This endpoint insert new translation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>of translation</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[content]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/translation"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Translation"
  },
  {
    "type": "delete",
    "url": "/translation/{id}",
    "title": "Remove translation term",
    "name": "Remove_translation",
    "description": "<p>This endpoint remove translation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of translation</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/translation/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Translation"
  },
  {
    "type": "put",
    "url": "/translation/{id}",
    "title": "Update translation by id",
    "name": "Update_translation_by_id",
    "description": "<p>This endpoint update translation selected by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of translation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>of translation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>of translation</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[content]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/translation/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Translation"
  },
  {
    "type": "post",
    "url": "/users/departments",
    "title": "Assign user to department",
    "name": "Assign_user_to_department",
    "description": "<p>This endpoint assign the given user to given department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "department_id",
            "description": "<p>ID of department (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "User_Department",
    "sampleRequest": [
      {
        "url": "/backend/api/users/departments"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_Department"
  },
  {
    "type": "delete",
    "url": "/users/departments/:id",
    "title": "Delete user from department",
    "name": "Delete_user_from_department",
    "description": "<p>This endpoint delete the information about user assigment to department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user-department table row</p>"
          }
        ]
      }
    },
    "group": "User_Department",
    "sampleRequest": [
      {
        "url": "/backend/api/users/departments/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_Department"
  },
  {
    "type": "put",
    "url": "/users/departments/:id",
    "title": "Update user from department",
    "name": "Update_user_from_department",
    "description": "<p>This endpoint update the information about user assigment</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user-department table row</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "department_id",
            "description": "<p>ID of department (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "User_Department",
    "sampleRequest": [
      {
        "url": "/backend/api/users/departments/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_Department"
  },
  {
    "type": "post",
    "url": "/unit-users",
    "title": "Assign user to unit",
    "name": "Assign_user_to_unit",
    "description": "<p>This endpoint assign the given user to given unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "unit_id",
            "description": "<p>ID of unit (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "User_unit",
    "sampleRequest": [
      {
        "url": "/backend/api/users/units"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_unit"
  },
  {
    "type": "delete",
    "url": "/unit-users/:id",
    "title": "Delete user from unit",
    "name": "Delete_user_from_unit",
    "description": "<p>This endpoint delete the information about user assigment to unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user-unit table row</p>"
          }
        ]
      }
    },
    "group": "User_unit",
    "sampleRequest": [
      {
        "url": "/backend/api/users/units/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_unit"
  },
  {
    "type": "put",
    "url": "/unit-users/:id",
    "title": "Update user from unit",
    "name": "Update_user_from_unit",
    "description": "<p>This endpoint update the information about user assigment</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user-unit table row</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "unit_id",
            "description": "<p>ID of unit (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "User_unit",
    "sampleRequest": [
      {
        "url": "/backend/api/users/units/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_unit"
  },
  {
    "type": "post",
    "url": "/user/change/password",
    "title": "Change user password",
    "name": "Change_user_password",
    "description": "<p>This endpoint change user password</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "new_password",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/user/change/password"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/{id}",
    "title": "Delete user by id",
    "name": "Delete_user_by_id",
    "description": "<p>This endpoint remove user from db</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/users/{id}"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/register/link/:department",
    "title": "Generate register link",
    "name": "Generate_register_link",
    "description": "<p>This endpoint return user register link</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "department_id",
            "description": ""
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/users/register/link/:departmen"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "Get_all_users",
    "description": "<p>This endpoint return users</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/company",
    "title": "Get users by company",
    "name": "Get_user_by_company",
    "description": "<p>This endpoint return users by company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/users/company"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "Get user by id",
    "name": "Get_user_by_id",
    "description": "<p>This endpoint return user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>user_id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/auth/user",
    "title": "Get user info",
    "name": "Get_user_information",
    "description": "<p>This endpoint returns the informations about user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/auth/user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/profile",
    "title": "Get user profile",
    "name": "Get_user_profile",
    "description": "<p>This endpoint return users</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/backend/api/user/profilec"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Insert user into db",
    "name": "Insert_user_into_db",
    "description": "<p>This endpoint create new user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lastname",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/{id}",
    "title": "Update user by id",
    "name": "Update_user_by_id",
    "description": "<p>This endpoint update user model</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/visitors",
    "title": "Add new visitors",
    "name": "Add_new_visitors",
    "description": "<p>This endpoint adds new visitors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ip_address",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "language.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "country.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "state.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "device",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "browser",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "referer",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_mobile",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page_views",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/backend/api/visitors/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "delete",
    "url": "/visitors/:id",
    "title": "Delete visitors",
    "name": "Delete_visitors_data",
    "description": "<p>This endpoint delete visitors information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of visitors</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/backend/api/visitors/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "get",
    "url": "/onlinevisitors",
    "title": "Get all online visitors",
    "name": "Get_all_online_visitors",
    "description": "<p>This endpoint return all online visitors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/onlinevisitors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "get",
    "url": "/visitors",
    "title": "Get all visitors",
    "name": "Get_all_visitors",
    "description": "<p>This endpoint return all visitors</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/visitors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "get",
    "url": "/visitors",
    "title": "Get visitors",
    "name": "Get_list_of_visitors",
    "description": "<p>This endpoint get list of visitors</p>",
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/backend/api/visitors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "put",
    "url": "/visitors/{visitor}",
    "title": "Increments visits number",
    "name": "Increments_visits_number",
    "description": "<p>This endpoint update increments visits number of visitor</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "visitor",
            "description": "<p>Encrypted id of visitor from cookie</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/visitors/:visitor"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "post",
    "url": "/visitors",
    "title": "Insert new visitor",
    "name": "Insert_new_visitor",
    "description": "<p>This endpoint save new visitor to database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>ip address of visitor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>domain address (example: http://google.com)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_page",
            "description": "<p>first visit page address (example: http://google.com/page/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "visit",
            "defaultValue": "0",
            "description": "<p>number of visits</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of visitor (example: USA, Republic of Moldova, Romania)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of visitor (example: Chisnau, Berlin, Istambul)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of system (example: ru, ro, en)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "browser",
            "description": "<p>type of browser (example: Chrome, Firefox, Internet Explorer)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "browser_version",
            "description": "<p>version of browser (example: 57.0.2987.133, 57.0.2987)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os",
            "description": "<p>type of os (example: Windows, Unix, Ubuntu)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os_version",
            "description": "<p>version of os (exmample: 10,7,8)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "mobile",
            "defaultValue": "0",
            "description": "<p>is mobile device (1 = true, 0= false)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fingerprint",
            "description": "<p>fingerprint for visitor</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cookie_enabled",
            "defaultValue": "0",
            "description": "<p>if coockie is enabled (1= True, False = 0)</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/visitors"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "post",
    "url": "/visitors/fingerprint",
    "title": "Insert visitor or increment visit by fingerprint",
    "name": "Insert_visitor_or_increment_visit_by_fingerprint",
    "description": "<p>This endpoint Insert visitor or increment visit by fingerprint when cookies are disabled</p>",
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/visitors/fingerprint"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "post",
    "url": "/visitors/activity",
    "title": "Update last activity time",
    "name": "Update_last_activity_time",
    "description": "<p>This endpoint update last activity time of visitor</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "visitor",
            "description": "<p>Encrypted id of visitor from cookie</p>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/visitors/activity"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "put",
    "url": "/visitors/:id",
    "title": "Update visitors",
    "name": "Update_visitors_data",
    "description": "<p>This endpoint update visitors information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of visitors</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "ip_address",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "language.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "country.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "state.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "device",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "browser",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "referer",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "is_mobile",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page_views",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "Visitors",
    "sampleRequest": [
      {
        "url": "/backend/api/visitors/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visitors"
  },
  {
    "type": "post",
    "url": "/visits",
    "title": "Add new visits",
    "name": "Add_new_visits",
    "description": "<p>This endpoint adds new visits</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ip_address",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "domain.id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "visitor_id",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page_url",
            "description": "<ul> <li>Required</li> </ul>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page_views",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "Visits",
    "sampleRequest": [
      {
        "url": "/backend/api/visits/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visits"
  },
  {
    "type": "delete",
    "url": "/visits/:id",
    "title": "Delete visits",
    "name": "Delete_visits_data",
    "description": "<p>This endpoint delete visits information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of visits</p>"
          }
        ]
      }
    },
    "group": "Visits",
    "sampleRequest": [
      {
        "url": "/backend/api/visits/{id}/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visits"
  },
  {
    "type": "get",
    "url": "/visits",
    "title": "Get visits",
    "name": "Get_list_of_visits",
    "description": "<p>This endpoint get list of visits</p>",
    "group": "Visits",
    "sampleRequest": [
      {
        "url": "/backend/api/visits"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visits"
  },
  {
    "type": "put",
    "url": "/visits/:id",
    "title": "Update visits",
    "name": "Update_visits_data",
    "description": "<p>This endpoint update visits information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of visits</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "page_views",
            "description": "<ul> <li>Required</li> </ul>"
          }
        ]
      }
    },
    "group": "Visits",
    "sampleRequest": [
      {
        "url": "/backend/api/visits/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Visits"
  },
  {
    "type": "delete",
    "url": "/webhooks/:id",
    "title": "Delete webhook",
    "name": "Delete_webhook",
    "description": "<p>This endpoint delete webhook</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Webhooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of webhook to delete</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/webhooks/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "get",
    "url": "/webhooks",
    "title": "Get list of webhooks by company",
    "name": "Get_list_of_webhooks_by_company",
    "description": "<p>This endpoint return list of webhooks by company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Webhooks",
    "sampleRequest": [
      {
        "url": "/backend/api/webhooks"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "get",
    "url": "/publicEvents",
    "title": "Get public events list",
    "name": "Get_public_event_list",
    "description": "<p>This endpoint return a list of public events</p>",
    "group": "Webhooks",
    "sampleRequest": [
      {
        "url": "/backend/api/publicEvents"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "get",
    "url": "/webhooks/:id",
    "title": "Get webhook by id",
    "name": "Get_webhook_by_id",
    "description": "<p>This endpoint return webhook by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Webhooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Webhook id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/webhooks/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "post",
    "url": "/webhooks",
    "title": "Add new webhook",
    "name": "Insert_new_webhook",
    "description": "<p>This endpoint insert new webhook</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Webhooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url of the webhook</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_key",
            "description": "<p>Client Secret Key for sender security check</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isActive",
            "description": "<p>1-Is active, 0-disabled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "events",
            "description": "<p>List of event names comma separated</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/webhooks"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "put",
    "url": "/webhooks/:id",
    "title": "Edit webhook",
    "name": "Update_webhook",
    "description": "<p>This endpoint update webhook</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Webhooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of webhook to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url of the webhook</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isActive",
            "description": "<p>1-Is active, 0-disabled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_key",
            "description": "<p>Client Secret Key for sender security check</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "events",
            "description": "<p>List of event names comma separated</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/webhooks/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Webhooks"
  },
  {
    "type": "get",
    "url": "/ui/getWindowsBySize",
    "title": "Get groups with windows by size",
    "name": "Get_groups_with_windows_data_by_size",
    "description": "<p>This endpoint return preloaded data</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Window_groups_with_windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "device_width",
            "description": "<p>Device width in cm</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "device_height",
            "description": "<p>Device height in cm</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/getGroupWindowBySize"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Window_groups_with_windows"
  },
  {
    "type": "delete",
    "url": "/ui/windows/{id}",
    "title": "Delete window",
    "name": "Delete_window_by_id",
    "description": "<p>This endpoint delete window by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Window id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/windows/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "put",
    "url": "/ui/windows/{id}",
    "title": "Edit new window",
    "name": "Edit_new_window",
    "description": "<p>This endpoint update window by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Window id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "identifier",
            "description": "<p>Identifier in format window_name_min-width_max-width</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Window name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "min_width",
            "description": "<p>Min device width in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "max_width",
            "description": "<p>Max device width in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "min_height",
            "defaultValue": "0",
            "description": "<p>Min device height in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "max_height",
            "defaultValue": "0",
            "description": "<p>Max device height in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "metadata",
            "description": "<p>JSON window description</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/windows/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "get",
    "url": "/ui/windows",
    "title": "Get all windows",
    "name": "Get_all_windows",
    "description": "<p>This endpoint return all window objects</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Accept-Language language</p>"
          }
        ]
      }
    },
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "device_width",
            "description": "<p>Device width in cm</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "device_height",
            "description": "<p>Device height in cm</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "version",
            "description": "<p>UI version like: 1505723274</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/windows"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "get",
    "url": "/ui/windows/{identifier}",
    "title": "Get window by identifier",
    "name": "Get_window_by_id",
    "description": "<p>This endpoint return window by id</p>",
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "identifier",
            "description": "<p>Window identifier ex: new_order_5_10</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/windows/:identifier"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "get",
    "url": "/ui/getWindowData/{identifier}",
    "title": "Get preloaded window data by identifier",
    "name": "Get_window_data",
    "description": "<p>This endpoint return preloaded data</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "identifier",
            "description": "<p>Window identifier ex: new_order_5_10</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/getWindowData/:identifier"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "post",
    "url": "/ui/windows",
    "title": "Store new window",
    "name": "Store_new_window",
    "description": "<p>This endpoint create new window</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "Windows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "identifier",
            "description": "<p>Identifier in format window_name_min-width_max-width</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Window name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "min_width",
            "description": "<p>Min device width in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "max_width",
            "description": "<p>Max device width in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "min_height",
            "defaultValue": "0",
            "description": "<p>Min device height in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "max_height",
            "defaultValue": "0",
            "description": "<p>Max device height in centimeters</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "metadata",
            "description": "<p>JSON window description</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/backend/api/ui/windows"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Windows"
  },
  {
    "type": "delete",
    "url": "/unit/{id}",
    "title": "Delete unit",
    "name": "Delete_unit",
    "description": "<p>This endpoint delete the information about unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of unit (Required)</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/unit/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "get",
    "url": "/units",
    "title": "Get list of all units by company",
    "name": "Get_list_of_all_units_for_logged_in_user__Administrator__",
    "description": "<p>This endpoint returns list of units for logged in user (Administrator)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/units"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "get",
    "url": "/unit/user",
    "title": "Get list of units by user",
    "name": "Get_list_of_units_for_logged_in_user__Administrator__",
    "description": "<p>This endpoint returns list of units for logged in user (Administrator)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user (Required)</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/unit/user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "get",
    "url": "/unit/:id/users",
    "title": "Get list of users from unit",
    "name": "Get_users_by_unit",
    "description": "<p>This endpoint returns list of users from unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of unit (Required)</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/unit/:id/users"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "post",
    "url": "/unit",
    "title": "Add new unit",
    "name": "Insert_new_unit",
    "description": "<p>This endpoint insert new unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of unit</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>Id of unit type</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/unit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "put",
    "url": "/unit/:id",
    "title": "Update unit",
    "name": "Update_unit",
    "description": "<p>This endpoint updates information unit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of unit (Required)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of unit</p>"
          }
        ]
      }
    },
    "group": "unit",
    "sampleRequest": [
      {
        "url": "/backend/api/unit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit"
  },
  {
    "type": "post",
    "url": "/unit/type",
    "title": "Add unit type",
    "name": "Add_unit_type",
    "description": "<p>This endpoint add new unit/type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "i18n",
            "description": "<p>i18n[title] unit</p>"
          }
        ]
      }
    },
    "group": "unit_type",
    "sampleRequest": [
      {
        "url": "/backend/api/unit/type"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit_type"
  },
  {
    "type": "put",
    "url": "/unit/type/:id",
    "title": "Update unit type",
    "name": "Update_user_from_unit",
    "description": "<p>This endpoint update unit/type</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID of unit/type (Required)</p>"
          }
        ]
      }
    },
    "group": "unit_type",
    "sampleRequest": [
      {
        "url": "/backend/api/unit/type/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "unit_type"
  }
] });
