/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function formulario(){
    var form=document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var filaInicio=Number(document.getElementById('filaInicio').value);
        var columnaInicio=Number(document.getElementById('columnaInicio').value);
        restablecer();
        inicializa(filaInicio, columnaInicio);
        var c1=document.getElementById('c1');
        var c2=document.getElementById('c2');
        var c3=document.getElementById('c3');
        var c4=document.getElementById('c4');
        var c5=document.getElementById('c5');
        var c6=document.getElementById('c6');
        var c7=document.getElementById('c7');
        var c8=document.getElementById('c8');
        var c9=document.getElementById('c9');
        var c10=document.getElementById('c10');
        var c11=document.getElementById('c11');
        var c12=document.getElementById('c12');
        var c13=document.getElementById('c13');
        var c14=document.getElementById('c14');
        var c15=document.getElementById('c15');
        var c16=document.getElementById('c16');
        var c17=document.getElementById('c17');
        var c18=document.getElementById('c18');
        var c19=document.getElementById('c19');
        var c20=document.getElementById('c20');
        var c21=document.getElementById('c21');
        var c22=document.getElementById('c22');
        var c23=document.getElementById('c23');
        var c24=document.getElementById('c24');
        var c25=document.getElementById('c25');
        var c26=document.getElementById('c26');
        var c27=document.getElementById('c27');
        var c28=document.getElementById('c28');
        var c29=document.getElementById('c29');
        var c30=document.getElementById('c30');
        var c31=document.getElementById('c31');
        var c32=document.getElementById('c32');
        var c33=document.getElementById('c33');
        var c34=document.getElementById('c34');
        var c35=document.getElementById('c35');
        var c36=document.getElementById('c36');
        var c37=document.getElementById('c37');
        var c38=document.getElementById('c38');
        var c39=document.getElementById('c39');
        var c40=document.getElementById('c40');
        var c41=document.getElementById('c41');
        var c42=document.getElementById('c42');
        var c43=document.getElementById('c43');
        var c44=document.getElementById('c44');
        var c45=document.getElementById('c45');
        var c46=document.getElementById('c46');
        var c47=document.getElementById('c47');
        var c48=document.getElementById('c48');
        var c49=document.getElementById('c49');
        var c50=document.getElementById('c50');
        var c51=document.getElementById('c51');
        var c52=document.getElementById('c52');
        var c53=document.getElementById('c53');
        var c54=document.getElementById('c54');
        var c55=document.getElementById('c55');
        var c56=document.getElementById('c56');
        var c57=document.getElementById('c57');
        var c58=document.getElementById('c58');
        var c59=document.getElementById('c59');
        var c60=document.getElementById('c60');
        var c61=document.getElementById('c61');
        var c62=document.getElementById('c62');
        var c63=document.getElementById('c63');
        var c64=document.getElementById('c64');
        c1.innerHTML=tablero[0][0];
        c2.innerHTML=tablero[0][1];
        c3.innerHTML=tablero[0][2];
        c4.innerHTML=tablero[0][3];
        c5.innerHTML=tablero[0][4];
        c6.innerHTML=tablero[0][5];
        c7.innerHTML=tablero[0][6];
        c8.innerHTML=tablero[0][7];
        c9.innerHTML=tablero[1][0];
        c10.innerHTML=tablero[1][1];
        c11.innerHTML=tablero[1][2];
        c12.innerHTML=tablero[1][3];
        c13.innerHTML=tablero[1][4];
        c14.innerHTML=tablero[1][5];
        c15.innerHTML=tablero[1][6];
        c16.innerHTML=tablero[1][7];
        c17.innerHTML=tablero[2][0];
        c18.innerHTML=tablero[2][1];
        c19.innerHTML=tablero[2][2];
        c20.innerHTML=tablero[2][3];
        c21.innerHTML=tablero[2][4];
        c22.innerHTML=tablero[2][5];
        c23.innerHTML=tablero[2][6];
        c24.innerHTML=tablero[2][7];
        c25.innerHTML=tablero[3][0];
        c26.innerHTML=tablero[3][1];
        c27.innerHTML=tablero[3][2];
        c28.innerHTML=tablero[3][3];
        c29.innerHTML=tablero[3][4];
        c30.innerHTML=tablero[3][5];
        c31.innerHTML=tablero[3][6];
        c32.innerHTML=tablero[3][7];
        c33.innerHTML=tablero[4][0];
        c34.innerHTML=tablero[4][1];
        c35.innerHTML=tablero[4][2];
        c36.innerHTML=tablero[4][3];
        c37.innerHTML=tablero[4][4];
        c38.innerHTML=tablero[4][5];
        c39.innerHTML=tablero[4][6];
        c40.innerHTML=tablero[4][7];
        c41.innerHTML=tablero[5][0];
        c42.innerHTML=tablero[5][1];
        c43.innerHTML=tablero[5][2];
        c44.innerHTML=tablero[5][3];
        c45.innerHTML=tablero[5][4];
        c46.innerHTML=tablero[5][5];
        c47.innerHTML=tablero[5][6];
        c48.innerHTML=tablero[5][7];
        c49.innerHTML=tablero[6][0];
        c50.innerHTML=tablero[6][1];
        c51.innerHTML=tablero[6][2];
        c52.innerHTML=tablero[6][3];
        c53.innerHTML=tablero[6][4];
        c54.innerHTML=tablero[6][5];
        c55.innerHTML=tablero[6][6];
        c56.innerHTML=tablero[6][7];
        c57.innerHTML=tablero[7][0];
        c58.innerHTML=tablero[7][1];
        c59.innerHTML=tablero[7][2];
        c60.innerHTML=tablero[7][3];
        c61.innerHTML=tablero[7][4];
        c62.innerHTML=tablero[7][5];
        c63.innerHTML=tablero[7][6];
        c64.innerHTML=tablero[7][7];
    });
}

var tablero=new Array(new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0));      //tablero en el que se llevara el registro del recorrido del caballo
var p=new Array(new Array(2,3,4,4,4,4,3,2),
                new Array(3,4,6,6,6,6,4,3),             //tablero con el numero de  
                new Array(4,6,8,8,8,8,6,4),             //posibles movidas que puede
                new Array(4,6,8,8,8,8,6,4),             //hacer el caballo
                new Array(4,6,8,8,8,8,6,4),
                new Array(4,6,8,8,8,8,6,4),
                new Array(3,4,6,6,6,6,4,3),
                new Array(2,3,4,4,4,4,3,2));
                
function movValido(i, j){
    var result=false;
    if(i>=0 && j>=0 && i<tablero[0].length && j<tablero[0].length){
        if(tablero[i][j]==0){
            result=true;        //metodo que valida la posición a la
        }                       //que intenta moverse el caballo
    }
    return result;
}

function reduce(i, j){
    if(movValido(i-2, j-1)){
        if(p[i-2][j-1]!=0){
            p[i-2][j-1]=p[i-2][j-1]-1;      //metodo que revisa las posibles
        }                                   //posiciones a las que puede
    }                                       //moverse el caballo a partir de
    if(movValido(i-2, j+1)){                //la posición en la que esta sobre
        if(p[i-2][j+1]!=0){                 //el tablero de posibles posiciones
            p[i-2][j+1]=p[i-2][j+1]-1;      //y les resta una posición para
        }                                   //saber que hay una posición menos
    }                                       //a la que se puede mover el caballo
    if(movValido(i-1, j-2)){
        if(p[i-1][j-2]!=0){
            p[i-1][j-2]=p[i-1][j-2]-1;
        }
    }
    if(movValido(i-1, j+2)){
        if(p[i-1][j+2]!=0){
            p[i-1][j+2]=p[i-1][j+2]-1;
        }
    }
    if(movValido(i+1, j-2)){
        if(p[i+1][j-2]!=0){
            p[i+1][j-2]=p[i+1][j-2]-1;
        }
    }
    if(movValido(i+1, j+2)){
        if(p[i+1][j+2]!=0){
            p[i+1][j+2]=p[i+1][j+2]-1;
        }
    }
    if(movValido(i+2, j-1)){
        if(p[i+2][j-1]!=0){
            p[i+2][j-1]=p[i+2][j-1]-1;
        }
    }
    if(movValido(i+2, j+1)){
        if(p[i+2][j+1]!=0){
            p[i+2][j+1]=p[i+2][j+1]-1;
        }
    }
}

function recorre1(i, j, cont){
    var result=false;
    var x=0;
    var y=0;
    var num=9;
    tablero[i][j]=cont;                                 //metodo que lleva a
    p[i][j]=0;                                          //cabo el recorrido
    reduce(i, j);                                       //del caballo por el
    if(cont==64){                                       //tablero y revisando
        result=true;                                    //la posición a la
    }                                                   //cual es mas factible
    else if(cont==63){                                  //moverse revisando
        for(var m=0;m<tablero.length;m++){              //las posibles posiciones
            for(var n=0;n<tablero[0].length;n++){       //a la cuales puede
                if(tablero[m][n]==0){                   //moverse el caballo
                    x=m;                                //de la siguiente manera
                    y=n;                                //  1   2
                }                                       //3       4
            }                                           //    X
        }                                               //7       8
        recorre1(x, y, cont+1);                         //  5   6
    }
    else{
        if(movValido(i-2, j-1)){
            if(p[i-2][j-1]!=0 && p[i-2][j-1]<num){
                num=p[i-2][j-1];
                x=i-2;
                y=j-1;
            }
        }
        if(movValido(i-2, j+1)){
            if(p[i-2][j+1]!=0 && p[i-2][j+1]<num){
                num=p[i-2][j+1];
                x=i-2;
                y=j+1;
            }
        }
        if(movValido(i-1, j-2)){
            if(p[i-1][j-2]!=0 && p[i-1][j-2]<num){
                num=p[i-1][j-2];
                x=i-1;
                y=j-2;
            }
        }
        if(movValido(i-1, j+2)){
            if(p[i-1][j+2]!=0 && p[i-1][j+2]<num){
                num=p[i-1][j+2];
                x=i-1;
                y=j+2;
            }
        }
        if(movValido(i+2, j-1)){
            if(p[i+2][j-1]!=0 && p[i+2][j-1]<num){
                num=p[i+2][j-1];
                x=i+2;
                y=j-1;
            }
        }
        if(movValido(i+2, j+1)){
            if(p[i+2][j+1]!=0 && p[i+2][j+1]<num){
                num=p[i+2][j+1];
                x=i+2;
                y=j+1;
            }
        }
        if(movValido(i+1, j-2)){
            if(p[i+1][j-2]!=0 && p[i+1][j-2]<num){
                num=p[i+1][j-2];
                x=i+1;
                y=j-2;
            }
        }
        if(movValido(i+1, j+2)){
            if(p[i+1][j+2]!=0 && p[i+1][j+2]<num){
                num=p[i+1][j+2];
                x=i+1;
                y=j+2;
            }
        }
        recorre1(x, y, cont+1);
    }
    return result;
}
function recorre2(i, j, cont){
    var result=false;
    var x=0;
    var y=0;
    var num=9;
    tablero[i][j]=cont;                                 //metodo que lleva a
    p[i][j]=0;                                          //cabo el recorrido
    reduce(i, j);                                       //del caballo por el
    if(cont==64){                                       //tablero y revisando
        result=true;                                    //la posición a la
    }                                                   //cual es mas factible
    else if(cont==63){                                  //moverse revisando
        for(var m=0;m<tablero.length;m++){              //las posibles posiciones
            for(var n=0;n<tablero[0].length;n++){       //a la cuales puede
                if(tablero[m][n]==0){                   //moverse el caballo
                    x=m;                                //de la siguiente manera
                    y=n;                                //  3   2
                }                                       //4       1
            }                                           //    X
        }                                               //5       8
        recorre2(x, y, cont+1);                         //  6   7
    }
    else{
        if(movValido(i-1, j+2)){
            if(p[i-1][j+2]!=0 && p[i-1][j+2]<num){
                num=p[i-1][j+2];
                x=i-1;
                y=j+2;
            }
        }
        if(movValido(i-2, j+1)){
            if(p[i-2][j+1]!=0 && p[i-2][j+1]<num){
                num=p[i-2][j+1];
                x=i-2;
                y=j+1;
            }
        }
        if(movValido(i-2, j-1)){
            if(p[i-2][j-1]!=0 && p[i-2][j-1]<num){
                num=p[i-2][j-1];
                x=i-2;
                y=j-1;
            }
        }
        if(movValido(i-1, j-2)){
            if(p[i-1][j-2]!=0 && p[i-1][j-2]<num){
                num=p[i-1][j-2];
                x=i-1;
                y=j-2;
            }
        }
        if(movValido(i+1, j-2)){
            if(p[i+1][j-2]!=0 && p[i+1][j-2]<num){
                num=p[i+1][j-2];
                x=i+1;
                y=j-2;
            }
        }
        if(movValido(i+2, j-1)){
            if(p[i+2][j-1]!=0 && p[i+2][j-1]<num){
                num=p[i+2][j-1];
                x=i+2;
                y=j-1;
            }
        }
        if(movValido(i+2, j+1)){
            if(p[i+2][j+1]!=0 && p[i+2][j+1]<num){
                num=p[i+2][j+1];
                x=i+2;
                y=j+1;
            }
        }
        if(movValido(i+1, j+2)){
            if(p[i+1][j+2]!=0 && p[i+1][j+2]<num){
                num=p[i+1][j+2];
                x=i+1;
                y=j+2;
            }
        }
        recorre2(x, y, cont+1);
    }
    return result;
}

function inicializa(i, j){
    if(i<4){                        //metodo que decide de que forma llevar
        recorre1(i, j, 1);          //a cabo el recorrido del caballo revisando
    }                               //cual es el valor de i
    else{
        recorre2(i, j, 1);
    }
}

function restablecer(){
    this.tablero=new Array(new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),
                      new Array(0,0,0,0,0,0,0,0),       //metodo para reinicializar las
                      new Array(0,0,0,0,0,0,0,0),       //valriables tablero y p para
                      new Array(0,0,0,0,0,0,0,0),       //evitar errores al mostrar el
                      new Array(0,0,0,0,0,0,0,0),       //tablero cada vez que se ingresen
                      new Array(0,0,0,0,0,0,0,0),       //nuevas coordenadas
                      new Array(0,0,0,0,0,0,0,0));
    this.p=new Array(new Array(2,3,4,4,4,4,3,2),
                new Array(3,4,6,6,6,6,4,3),
                new Array(4,6,8,8,8,8,6,4),
                new Array(4,6,8,8,8,8,6,4),
                new Array(4,6,8,8,8,8,6,4),
                new Array(4,6,8,8,8,8,6,4),
                new Array(3,4,6,6,6,6,4,3),
                new Array(2,3,4,4,4,4,3,2));
}
