$(document).ready(onReady); // jquery targets the doc, and runs when onReady function called.

function onReady() { 
    $.ajax({         
        type: 'GET', 
        url: '/artist' 
    }).then(function (response) { 
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });
    
    
    $.ajax({         
        type: 'GET', 
        url: '/songs' 
    }).then(function (response) { 
        for (let i = 0; i < response.length; i++) {
            let songs = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${songs.title}</td>
                    <td>${songs.artist}</td>
                    
                    
                    
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
}