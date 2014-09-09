Realidad_Infantil
=================

El proyecto **Realidad Infantil** tiene por finalidad servir de herramienta educativa para los niños, permitiéndoles interactuar
de una manera más dinámica con colores, formas y animales utilizando la **Realidad Aumentada (RA)** junto con **Reconocimiento de 
Voz (RV)** haciendo más divertida y próxima la tarea del aprendizaje.

Utiliza **JSARToolkit** de cara al desarrollo de la RA y la API de Google Chrome para el RV. La idea consiste en los siguientes pasos:

1. Capturar la imagen de la webcam y mostrarla en un canvas.
2. Buscar para cada fotograma la ubicación del código QR. Si no lo encuentra, volver al paso 1.
3. Cargar el modelo 3D diseñado con formato Collada y construirlo en la ubicación obtenida en el paso 2.
4. Volver al primer paso.

Explicado el proceso, hay que tener en cuenta que el código QR localizado en cada fotograma se considera la escena sobre la cual se monta el modelo; 
mover o rotar el código QR implica mover o rotar el propio modelo.

Los distintos modelos utilizados para las distintas secciones fueron localizados por Internet buscando aquellos gratuitos adaptándolos en algunos casos 
para ajustar la escala a proporciones más adecuadas. 
