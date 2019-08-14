class Stone {
    constructor(x, y, z, scene, item, onClick) {
        this.object = null;
        this.scene = scene;
        this.item = item;
        this.material = null;
        this.materialEmissive = null;
        this.onClick = onClick;
        this.row = 0;
        this.column = 0;
        this.x = x;
        this.y = y;
        this.z = z;

        this.testmaterial = null;
    }

    load() {
        this.materialEmissive = new THREE.MeshFaceMaterial(
            [
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: .5}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: .5}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: .5}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: 1.5}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: 1.5}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide, emissive: 0x2a2a2a, emissiveIntensity: 1.5})

            ]
        );

        this.material = new THREE.MeshFaceMaterial(
            [
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide}),
                new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/img.jpg'), side: THREE.DoubleSide})

            ]
        );

        var testmaterial = new THREE.MeshFaceMaterial([new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('js/steve.png'), side: THREE.DoubleSide})]);

        // var f =             function(object) {
        //     //this.object = object;
        //     object.name = 'TODO';
        //     object.material = testmaterial;
        //     //object.callback = this.onClick();
        //     object.castShadow = true;
        //     object.receiveShadow = true;
        //     //
        //     // this.setX(x);
        //     // this.setY(y);
        //     // this.setZ(z);
        //
        //     this.scene.add(object);
        // };

        // new THREE.ObjectLoader().load(
        //     this.item,//'js/steve.json',
        //     f
        // );

// var onClick = this.onClick;
 var scene = this.scene;
 var object = this.object;

       new THREE.ObjectLoader().load(this.item,
        //     function(object){
        //         object.name = 'TODO';
        //         object.material = testmaterial;
        //         object.callback = onClick;
        //         object.castShadow = true;
        //         object.receiveShadow = true;
        //
        //         scene.add(object);
        // }
           function(geometry){
               geometry.name = "TODO";
               geometry.traverse( function ( child ) {
                       if ( child instanceof THREE.Object3D  ) {
                       //console.log(child.name);
                       }

                       })


               // get the materials loaded from the file
                  // create our mesh with the loaded geometry and materials
              // var mesh = new THREE.Mesh(geometry, testmaterial);

               scene.add(geometry);

           });

      var gg=  scene.getChildByName("TODO", true);

       if (gg != null){
           console.log(gg.name);
       }

        // var loader = new THREE.JSONLoader();
        //
        // loader.load(this.item, function( geometry ) {
        //
        //     object.traverse( function ( child ) {
        //         if ( child instanceof THREE.Object3D  ) {
        //
        //
        //     // var mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
        //     // mesh.scale.set( 10, 10, 10 );
        //     // mesh.position.y = 150;
        //     // mesh.position.x = 0;
        //     // scene.add( mesh );
        //
        //
        // } );


            //
            // this.setX(x);
            // this.setY(y);
            // this.setZ(z);6


    }

    setX(x) {
        this.object.position.x = x;
    }

    setY(y) {
        this.object.position.y = y;
    }

    setZ(z) {
        this.object.position.z = z;
    }

    render() {

    }

    tick() {

    }

    destoy() {
        this.scene.remove(this.object);
    }

}