from django import forms
from .models import rscm_clientes
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class ClienteForm(forms.ModelForm):
    class Meta:
        model = rscm_clientes
        fields = ['nombre', 'apellidos', 'fecha_nac', 'foto']

        foto = forms.IntegerField(required=False)


class RegistroForm(UserCreationForm):
    email = forms.EmailField(required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
