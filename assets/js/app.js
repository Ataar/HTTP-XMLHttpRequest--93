let postContainer = document.getElementById('postContainer')

let baseUrl =`https://jsonplaceholder.typicode.com`;

// This line declares a variable named baseUrl and assigns it a string value "https://jsonplaceholder.typicode.com".
// This URL serves as the base URL for making API requests.



let postUrl = `${baseUrl}/posts`;
//Here, a variable named postUrl is declared.It uses string interpolation
// to concatenate the baseUrl variable with the /posts path.



let xhr = new XMLHttpRequest();
// 1- create instant/object XMLHttpRequest
//This line creates a new instance of the XMLHttpRequest object and assigns it to the variable xhr.
// XMLHttpRequest is a built-in JavaScript object used for making HTTP requests to a server.


xhr.open('GET',postUrl,true)
//2- configration Object
//The open() method of the XMLHttpRequest object is called with two parameters: the HTTP method ('GET') and the URL (postUrl) to which the request will be sent.
//This method initializes the request but does not send it yet.




xhr.send()
// This line sends the actual HTTP request to the server. 
//After this line, the browser starts the process of fetching data from the specified URL.


xhr.onload = function(){
    if(xhr.status===200)
    {
        console.log(xhr.response);
        let data = JSON.parse(xhr.response)
        console.log(data);
        Swal.fire({
            icon:'success',
            text:'HTTP-XMLRequest is Accepted',
            title:'HI, WELCOME',
            timer:2000
        })
        templating(data) 
    }
    else
    {
        Swal.fire({
            icon:'error',
            text:'HTTPS-Request is Rejected',
            title:'Try After Sometime',
            timer:2000
        })
    }
}
//This sets up an event handler for the load event of the XMLHttpRequest object.
//When the response is fully loaded from the server, the function inside will be executed.
//In this case, it simply logs the response received from the server to the console. 


const templating = (arr)=>{
    let result = '';
  arr.forEach(post => {
    result+= `
    <div class="card mt-5 bg-dark text-white">
    <div class="card-header">
        <h2 class="text-center">${post.title}</h2>
    </div>
    <div class="card-body">
        <p>${post.body}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
        <button class="btn btn-primary">
            Edit
        </button>
        <button class="btn btn-danger">Delete</button>
    </div>
</div>
    
    
    `

  });
     postContainer.innerHTML = result;

}