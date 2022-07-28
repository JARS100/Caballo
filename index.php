<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Problema del Caballo</title>
        <link rel="icon" href="ajedrez.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style type=text/css>
            th{
                text-align: center;
            }
            .boton{
                text-decoration: none;
                padding: 10px;
                font-weight: 600;
                font-size: 20px;
                color: #000000;
                background-color: #00FF00;
                border-radius: 6px;
                border: 2px solid #0016b0;
            }
        </style>
    </head>
    <body>
        <div class="container" align="center">
            <h1>Problema del Caballo</h1>
            <h2>Insertar las coordenadas en las que empezará el recorrido</h2>
            <h6>Las coordenadas solo pueden ser valores entre 0 y 7</h6>
            <div style="clear: both; display: block; height: 30px;"></div>
            <form id="formulario">
                <div class="form-group">
                  <label class="sr-only" for="filaInicio">Fila de Inicio:</label>
                  <input type="number" class="form-control" id="filaInicio" placeholder="Indique la fila de inicio" name="filaInicio">
                </div>
                <div style="clear: both; display: block; height: 30px;"></div>
                <div class="form-group">
                  <label class="sr-only" for="columnaInicio">Columna de Inicio:</label>
                  <input type="number" class="form-control" id="columnaInicio" placeholder="Indique la columna de inicio" name="columnaInicio">
                </div>
                <div style="clear: both; display: block; height: 30px;"></div>
                <input class="boton" type=submit value=Iniciar onclick="formulario()" />
                <div style="clear: both; display: block; height: 30px;"></div>
                <table class="table table-striped table-bordered table-hover" id="tablero">
                    <tr>
                        <th bgcolor="red"><img src="ajedrez.png" style="width: 40px;height: 40px"></th>
                        <th bgcolor="red">A</th>
                        <th bgcolor="red">B</th>
                        <th bgcolor="red">C</th>
                        <th bgcolor="red">D</th>
                        <th bgcolor="red">E</th>
                        <th bgcolor="red">F</th>
                        <th bgcolor="red">G</th>
                        <th bgcolor="red">H</th>
                        <th bgcolor="red"><img src="ajedrez.png" style="width: 40px;height: 40px"></th>
                    </tr>
                    <tr>
                        <th bgcolor="red">1</th>
                        <th bgcolor="blue"><div id="c1" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c2" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c3" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c4" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c5" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c6" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c7" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c8" style="color:white;"></div></th>
                        <th bgcolor="red">1</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">2</th>
                        <th bgcolor="blue"><div id="c9" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c10" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c11" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c12" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c13" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c14" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c15" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c16" style="color:white;"></div></th>
                        <th bgcolor="red">2</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">3</th>
                        <th bgcolor="blue"><div id="c17" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c18" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c19" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c20" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c21" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c22" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c23" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c24" style="color:white;"></div></th>
                        <th bgcolor="red">3</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">4</th>
                        <th bgcolor="blue"><div id="c25" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c26" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c27" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c28" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c29" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c30" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c31" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c32" style="color:white;"></div></th>
                        <th bgcolor="red">4</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">5</th>
                        <th bgcolor="blue"><div id="c33" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c34" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c35" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c36" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c37" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c38" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c39" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c40" style="color:white;"></div></th>
                        <th bgcolor="red">5</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">6</th>
                        <th bgcolor="blue"><div id="c41" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c42" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c43" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c44" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c45" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c46" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c47" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c48" style="color:white;"></div></th>
                        <th bgcolor="red">6</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">7</th>
                        <th bgcolor="blue"><div id="c49" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c50" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c51" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c52" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c53" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c54" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c55" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c56" style="color:white;"></div></th>
                        <th bgcolor="red">7</th>
                    </tr>
                    <tr>
                        <th bgcolor="red">8</th>
                        <th bgcolor="blue"><div id="c57" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c58" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c59" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c60" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c61" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c62" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c63" style="color:white;"></div></th>
                        <th bgcolor="blue"><div id="c64" style="color:white;"></div></th>
                        <th bgcolor="red">8</th>
                    </tr>
                    <tr>
                        <th bgcolor="red"><img src="ajedrez.png" style="width: 40px;height: 40px"></th>
                        <th bgcolor="red">A</th>
                        <th bgcolor="red">B</th>
                        <th bgcolor="red">C</th>
                        <th bgcolor="red">D</th>
                        <th bgcolor="red">E</th>
                        <th bgcolor="red">F</th>
                        <th bgcolor="red">G</th>
                        <th bgcolor="red">H</th>
                        <th bgcolor="red"><img src="ajedrez.png" style="width: 40px;height: 40px"></th>
                    </tr>
                </table>
            </form>
        </div>
        <script src="metodos.js"></script>
        <?php
        // put your code here
        ?>
    </body>
</html>
