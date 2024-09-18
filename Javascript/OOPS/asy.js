var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
       resolve("success");
    }, 2000);
});

myPromise.then(
    function(data) {
        console.log(data + " received in 2 seconds");
    },
    function(error) {
        console.log(error);
    }
);
