# Guia de desarrollo

## colors.styl

### $vs-colors

Nombres de los colores principales, se usa para iterar en algunos componentes y obtener todos los colores.

### :root

Variable de CSS , estas son las variables usadas en el marco.

Si necesitasa cambiar el color primario de todo el marco puedes hacerlo aqui o por medio de js para un control en produccion.

## mixins.styl

### vs-color

Esta funcion nos permite usar las variables css , para usarla el parametro (colorx) tiene que ser uno de los colores principales.

### vs-var

Se usa para obtener una variable de css.

## vars.styl

Contiene todas las variables del framework, se importan por separado cada variable de un componente en especifico.

## components/[component.styl]

son los estilos de cada componente por separado, incluyendo los sub componentes del mismo.

## vuesax.styl

Archivo que contiene todos los .styl del framework.

