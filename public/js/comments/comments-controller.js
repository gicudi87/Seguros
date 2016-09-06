(function () {
'use strict';

angular
    .module('myapp')
  .controller('CommentsController', CommentsController);
   CommentsController.$inject = ['$scope', '$modal', 'resolvedComments', 'Comments', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function CommentsController($scope, $modal, resolvedComments, Comments, DTOptionsBuilder,  DTColumnBuilder) {
      var vm = this;
        $scope.comments = resolvedComments;


     /////////////Slides Images/////////
        $scope.slides = [];
        $scope.slides.push({text:'Responsabilidad: Valor que está en la conciencia de la persona en base a la moral. ', image: '/imagenes/resp.jpg'});
        $scope.slides.push({text:'Ética : Costumbres y normas que dirigen o valoran el comportamiento humano. ', image: '/imagenes/etica.jpg'});
        $scope.slides.push({text:'Valores: Principios que nos permiten orientar nuestro comportamiento en función de realizarnos como personas. ', image: '/imagenes/bgEmpresariales.jpg'});
        $scope.slides.push({text:'Honestidad : Valor o cualidad propio de los seres humanos que tiene una estrecha relación con los principios de verdad, justicia y  la integridad. ', image: '/imagenes/honestidad.jpg'});

        $scope.setActive = function(idx) {
            $scope.slides[idx].active=true;
        };

//////////Seg Beca////////
        $scope.seguBecaPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
             templateUrl: 'seguBecaP.html',
             controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.segubecaEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'seguBecaE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };
        /////// Fin Segu Beca/////
        ///////Gastos medicos///////////
        $scope.gastosMPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'gastosMedP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.gastosMEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'gastosMedE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin gastos medicos//////////
        ///////Vida Mujer///////////
        $scope.vidaMujerPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'vidaMujerP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.vidaMujerEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'vidaMujerE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin Vida Mujer//////////
        ///////Plan Temporal///////////
        $scope.temporalPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'temporalP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.temporalEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'temporalE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin Plan Temporal//////////
        ///////Plan Nuevo Plenitud///////////
        $scope.nvoPlenitudPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'plenitudP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.nvoPlenitudEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'plenitudE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin Plan Nuevo Plenitud//////////
        ///////Plan Dotal///////////
        $scope.dotalPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'dotalP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.dotalEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'dotalE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin Plan Dotal//////////
        ///////Plan Orvi///////////
        $scope.orviPlan= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'orviP.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        $scope.orviEjemplo= function () {

            $scope.nuevoMiembro={};
            var modelInstance = $modal.open({
                templateUrl: 'orviE.html',
                controller: 'CommentsModal',
                resolve: {
                    comments: function () {
                        return $scope.comments;
                    }
                }
            });

        };

        //////////fin Plan Orvi//////////
        ////////////Login Modal////////
        $scope.login= function () {

            $scope.nuevoMiembro={};
            var modelLogin = $modal.open({
                templateUrl: 'login.html',
                controller: 'LoginModal',
                resolve: {
                    login: function () {
                        return $scope.login;
                    }
                }
            });
            modelLogin.result.then(function (entity) {
                $scope.login = entity;
                $scope.saveLogin();
            });

        };

        $scope.saveLogin = function () {

            $scope.options=false;

            console.log("entro");
        };
        ///////////fin Login Modal//////




//////////login-logout///////
        $scope.options=true;
        // $scope.login = function () {
        //     $scope.options=false;
        //
        // };

        $scope.logout = function () {
            $scope.options=true;
        };
   ////////////////////fin login//////////////

        //////////////////////////Tabla////////////////
        //
        //
        // vm.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
        //     return Comments.query().$promise;
        // })
        //
        // vm.dtColumns = [
        //     DTColumnBuilder.newColumn('name').withTitle('Nombre'),
        //     DTColumnBuilder.newColumn('telefono').withTitle('Telefono')
        //     ];
        //
        // vm.dtInstance = {};

        ///////////////////////fin Tabla///////////////////


      $scope.create = function () {
          $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.comments = Comments.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Comments.delete({id: id},
          function () {
            $scope.comments = Comments.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Comments.update({id: id}, $scope.comments,
            function () {
              $scope.comments = Comments.query();
              // $scope.clear();
            });
        } else {
                Comments.save($scope.comments,
                    function () {
                        $scope.comments = Comments.query();
                        // $scope.clear();
                    });

        }

      };

      $scope.clear = function () {
        $scope.comments =
            // Comments.query();
        {

          "name": "",

         "email":"",

         "telefono": "",

          "comment": "",

          "id": ""
        };

      };

      $scope.open = function (id) {
        var commentsSave = $modal.open({
          templateUrl: 'comments-save.html',
          controller: 'CommentsSaveController',
          resolve: {
            comments: function () {
              return $scope.comments;
            }
          }
        });

        commentsSave.result.then(function (entity) {

          $scope.comments = entity;
          $scope.save(id);
        }, function () {
            $scope.comments = resolvedComments;
        });
      };
    }
})();

(function () {
    'use strict';
    angular
        .module('myapp')
  .controller('CommentsSaveController',CommentsSaveController);
    CommentsSaveController.$inject=['$scope', '$modalInstance', 'comments',  'DTOptionsBuilder', 'DTColumnBuilder', '$state', '$location', '$window'];
    function CommentsSaveController($scope, $modalInstance, comments, DTOptionsBuilder, DTColumnBuilder, $state, $location, $window) {

      $scope.comments = comments;


        $scope.ok = function () {
            $modalInstance.close($scope.comments);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');


        };
    }
})();

(function () {
    'use strict';
    angular
        .module('myapp')
        .controller('CommentsModal',CommentsModal);
    CommentsModal.$inject=['$scope', '$modalInstance', 'comments',  'DTOptionsBuilder', 'DTColumnBuilder'];
    function CommentsModal($scope, $modalInstance, comments, DTOptionsBuilder, DTColumnBuilder) {

        $scope.comments = comments;


        $scope.cancel1 = function () {
            $modalInstance.dismiss('cancel');

        };
    }
})();

(function () {
    'use strict';
    angular
        .module('myapp')
        .controller('LoginModal',LoginModal);
    LoginModal.$inject=['$scope', '$modalInstance', 'DTOptionsBuilder', 'DTColumnBuilder', 'login'];
    function LoginModal($scope, $modalInstance, DTOptionsBuilder, DTColumnBuilder, login) {

        $scope.login = login;


        $scope.ok = function () {

            if($scope.login.admin == 'admin' && $scope.login.password == 1234){

                $modalInstance.close($scope.login);

            }
        };


        $scope.cancel1 = function () {
            $modalInstance.dismiss('cancel');

        };
    }
})();
