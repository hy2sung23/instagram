from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response

from accounts.models import User
from accounts.serializers import SignupSerializer, LoginSerializer


class SignupView(CreateAPIView):
    serializer_class = SignupSerializer
    model = User
    permission_classes = [
        permissions.AllowAny
    ]


class LoginView(RetrieveAPIView,CreateAPIView):
    serializer_class = LoginSerializer
    queryset = User.objects.all()
    model = User
    permission_classes = [
        permissions.AllowAny
    ]
    #
    # def post(self, request, *args, **kwargs):
    #     serializer = LoginSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)