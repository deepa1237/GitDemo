function getQueryData() {


    try {

        var strQueryString = "";
        if (window.location.search !== "")
            strQueryString = window.location.search.split('?');

        if (strQueryString !== "") {

            var strfinal = "";

            if (strQueryString[1] !== null) {
                strfinal = strQueryString[1].split('&');

                for (i = 0; i < strfinal.length; i++) {
                    var strvalue = strfinal[i].split('=');

                    if (strvalue[0] === "utm_source") {
                        document.getElementById("utm_source").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_medium") {
                        document.getElementById("utm_medium").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_term") {
                        document.getElementById("utm_term").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_content") {
                        document.getElementById("utm_content").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_campaign") {
                        document.getElementById("utm_campaign").value = strvalue[1];
                    }
                    if (strvalue[0] === "gclid" || strvalue[0] === "fbclid") {
                        document.getElementById("gclid").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_info") {
                        document.getElementById("utm_info").value = strvalue[1];
                    }
                    if (strvalue[0] === "utm_lms") {
                        document.getElementById("utm_lms").value = strvalue[1];
                    }
                }
            }
        }
    }
    catch (err) {
        strQueryString = "";
    }
}