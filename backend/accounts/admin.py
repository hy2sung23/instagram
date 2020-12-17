from django.contrib import admin
from accounts.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["photo_tag", ]


    def photo_tag(self, User):
        return User.avatar.url