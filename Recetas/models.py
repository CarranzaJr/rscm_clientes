from django.db import models
import os 

# Create your models here.

class rscm_clientes(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nac = models.DateField()
    foto = models.ImageField(upload_to='clientes_fotos', blank=True, null=True)


    def __str__(self):
        return f"{self.nombre} {self.apellidos}"
    
    # ELIMINAR FOTO AL MOMENTO DE ELIMINAR CAMPO
    def delete(self, *args, **kwargs):
        if self.foto and os.path.isfile(self.foto.path):
            try:
                os.remove(self.foto.path)
            except OSError as e:
                # Manejar errores, por ejemplo, escribir en el log
                print(f"Error al eliminar el archivo: {e}")
        super().delete(*args, **kwargs)
