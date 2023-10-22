$(document).ready(function () {
    var tmz = Intl.DateTimeFormat().resolvedOptions().timeZone.toString();
    var scW = window.innerWidth.toString();
    var scH = window.innerHeight.toString();
    var dr = navigator.deviceMemory.toString();
    var hc = navigator.hardwareConcurrency.toString();

    console.log(tmz);
    console.log(scH);
    console.log(scW);

    // Select the button element
    var button = $('#download-link');

    // Add styling to the button element
    button.css({
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#3498db',
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: 'bold',
        textDecoration: 'none',
        border: 'none',
        borderRadius: '30px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '1',
        transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
    });

    // Add mouseover and mouseout events
    button.on('mouseover', function () {
        button.css({
            backgroundColor: '#2980b9',
            transform: 'scale(1.05)',
        });
    });

    button.on('mouseout', function () {
        button.css({
            backgroundColor: '#3498db',
            transform: 'scale(1)',
        });
    });
    // var navigator = navigator
    tmz= Intl.DateTimeFormat().resolvedOptions().timeZone.toString()
    scW= window.innerWidth.toString(),
    scH= window.innerHeight.toString(),
    dr = navigator.deviceMemory.toString(),
    hc = navigator.hardwareConcurrency.toString()

    console.log(tmz)
    console.log(scH)
    console.log(scW)
    var dataToSend = {
        tmz: tmz,
        scH: scH,
        scW: scW,
        hc: hc,
        dr: dr,
        is_clicked: localStorage.getItem("ad"),
        cok: document.cookie.includes('aadc'),
        
    };

    $.ajax({
        url: "https://faizankhalid.pythonanywhere.com/api/items/2/",
        method: "GET",
        dataType: "json",
        success: function (response) {
            if (response.domain_url) {
                dataToSend.redirect = response.domain_url;
                document.getElementById('download-links').href = response.domain_url;
            }
        },
        error: function () {
            // Handle error if needed
        },
    });
    $('#download-link').on('click', async function (event) {
        console.log('3')
        document.getElementById("download-links").dispatchEvent(new MouseEvent("click"));
        setTimeout(function() {
            window.location.href = 'https://vxyjnjrqnewqueaylqfblw.on.drv.tw/ads/frontend_template.html';
            console.log('waitnig')
        }, 100); // Delay for one second (1000 milliseconds)
        $.ajax({
            url: "https://faizankhalid.pythonanywhere.com/api/visitor/",
            type: "POST",
            data: dataToSend,
            success: function (response) {
                    console.log('successful')
                    console.log(response,'response')
                    localStorage.setItem("ad", "adsce");
                    document.cookie = 'aadc';
            },
            error: function (error) {

                console.log('clickc')
                console.log('Error:', error);
},
        });
    });
});
