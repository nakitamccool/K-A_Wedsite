/**
 * Created by nakita on 05/05/2017.
 */
function initMap() {
    //Location coordinates
    var church = {lat: 51.910518, lng: -8.170365};
    var reception = {lat: 51.911443, lng: -8.063080};
    var bnb = {lat: 51.921212, lng: -8.084154};
    var dublinairport = {lat: 53.426334, lng: -6.249013};
    var corkairport = {lat: 51.844726, lng: -8.491990};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: church
    });

    //Church marker and pop up box
    var churchPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Ceremony</h3>' +
        '<div id="bodyContent">' +
        '</p><i class="fa fa-map-marker"></i><span class="mapdetail">The Holy Rosary Church, Midleton, Co. Cork, P25 WF65</span></p>' +
        '<p><a href="http://midletonparish.ie/">' + '<i class="fa fa-globe"><span class="mapdetail">www.midletonparish.ie</span></i></a></p>' +
        '<p><a href="tel:0214219000"><i class="fa fa-phone"><span class="mapdetail">(021) 421 9000</span></i></a></p>' +
        '</div>' +
        '</div>';

    var churchinfowindow = new google.maps.InfoWindow({
        content: churchPopUp
    });
    var churchmarker = new google.maps.Marker({
        position: church,
        title: 'Wedding ceremony',
        map: map
    });
    churchmarker.addListener('click', function () {
        churchinfowindow.open(map, churchmarker);
    });

    //Reception marker and pop up box
    var receptionPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Reception & Hotel Accommodation</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="fa fa-map-marker"></i><span class="mapdetail">Castlemartyr Resort, Castlemartyr, Co. Cork, P25 X300</span></p>' +
        '<p><a href="http://midletonparish.ie/">' + '<i class="fa fa-globe"><span class="mapdetail">www.castlemartyrresort.ie</span></i></a></p>' +
        '<p><a href="tel:0214636508"><i class="fa fa-phone"><span class="mapdetail">(021) 463 6508</span></i></a></p>' +
        '</div>' +
        '</div>';

    var receptioninfowindow = new google.maps.InfoWindow({
        content: receptionPopUp
    });
    var receptionmarker = new google.maps.Marker({
        position: reception,
        title: 'Wedding reception',
        map: map
    });
    receptionmarker.addListener('click', function () {
        receptioninfowindow.open(map, receptionmarker);
    });

    //BnB marker and pop up box
    var bnbPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">B&B Accommodation</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="fa fa-map-marker"></i><span class="mapdetail">Sundown House B&B, Kilmountain, Co. Cork, P25 H283</span></p>' +
        '<p><a href="http://www.sundownhousebb.com/">' + '<i class="fa fa-globe"><span class="mapdetail">www.sundownhousebb.com</span></i></a></p>' +
        '<p><a href="tel:0214667375"><i class="fa fa-phone"><span class="mapdetail">(021) 466 7375</span></i></a></p>' +
        '</div>' +
        '</div>';
    var bnbinfowindow = new google.maps.InfoWindow({
        content: bnbPopUp
    });
    var bnbmarker = new google.maps.Marker({
        position: bnb,
        title: 'BnB accommodation',
        map: map
    });
    bnbmarker.addListener('click', function () {
        bnbinfowindow.open(map, bnbmarker);
    });

    //Airport markers and pop up boxes

    var dublinairportPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Dublin Airport</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="fa fa-map-marker"></i><span class="mapdetail">Dublin airport, Swords, Co. Dublin, K67 X2V0</span></p>' +
        '<p><a href="https://www.dublinairport.com/">' + '<i class="fa fa-globe"><span class="mapdetail">www.dublinairport.com</span></i></a></p>' +
        '<p><a href="tel:018141111"><i class="fa fa-phone"><span class="mapdetail">(01) 814 1111</span></i></a></p>' +
        '</div>' +
        '</div>';
    var dublinairportinfowindow = new google.maps.InfoWindow({
        content: dublinairportPopUp
    });
    var dublinairportmarker = new google.maps.Marker({
        position: dublinairport,
        title: 'Dublin airport',
        map: map
    });
    dublinairportmarker.addListener('click', function () {
        dublinairportinfowindow.open(map, dublinairportmarker);
    });

    var corkairportPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Cork Airport</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="fa fa-map-marker"></i><span class="mapdetail">Cork airport, Kinsale Road, Co. Cork, T12 YH66</span></p>' +
        '<p><a href="https://www.corkairport.com/">' + '<i class="fa fa-globe"><span class="mapdetail">www.corkairport.com</span></i></a></p>' +
        '<p><a href="tel:0214313131"><i class="fa fa-phone"><span class="mapdetail">(021) 431 3131</span></i></a></p>' +
        '</div>' +
        '</div>';
    var corkairportinfowindow = new google.maps.InfoWindow({
        content: corkairportPopUp
    });
    var corkairportmarker = new google.maps.Marker({
        position: corkairport,
        title: 'Cork airport',
        map: map
    });
    corkairportmarker.addListener('click', function () {
        corkairportinfowindow.open(map, corkairportmarker);
    });
}