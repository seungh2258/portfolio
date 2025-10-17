 window.onload = function() {
    
    
    //삼양식품 본사
    
    var container = document.getElementById('map1');
    var options = {
        center: new daum.maps.LatLng(37.607732998662776, 127.03422774622182),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.607732998662776, 127.03422774622182); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
    


    //원주공장
     
      var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(37.37680315485873, 127.9370134811329),
        level: 3
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(37.37680315485873, 127.9370134811329); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     

    //익산공장
     
     var container3 = document.getElementById('map3');
   var options3 = {
       center: new daum.maps.LatLng(35.95964908063527, 126.95052910142294),
       level: 3
   };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(35.95964908063527, 126.95052910142294); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition3
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
   


    //밀양공장
     
     var container4 = document.getElementById('map4');
   var options4 = {
       center: new daum.maps.LatLng(35.493373732643256, 128.73090549305635),
       level: 3
   };

   var map4 = new daum.maps.Map(container4, options4);
   
   var mapTypeControl4 = new daum.maps.MapTypeControl();
   map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl4 = new daum.maps.ZoomControl();
   map4.addControl(zoomControl4, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition4  = new daum.maps.LatLng(35.493373732643256, 128.73090549305635); 
   var marker4 = new daum.maps.Marker({
       position: markerPosition4
   });

   marker4.setMap(map4);
   
   var overlay4 = new daum.maps.CustomOverlay({
       map: map4,
       position: marker4.getPosition()       
   }); 
    
    
}

 
 
 
 
