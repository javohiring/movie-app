
// let card = document.querySelector('.card')

// let text = document.querySelector('.text')


// let select = document.querySelector('.select')



// let addLocal = (name)=>{
  //   let local = JSON.parse(localStorage.getItem('data')) || []
  //   if(local.includes(name)){
    //       local = local.filter(item=>item != name)
    //   }else{
      //       local.push(name)
      //   }
      //   console.log(local)
      //   localStorage.setItem('data', JSON.stringify(local))
      //   localRender()
      // }
      
      // function localRender(){
        //   modal.innerHTML = null
        //   let local = JSON.parse(localStorage.getItem('data')) || []
        //   for(let i=0; i<local.length; i++){
          //       let li = document.createElement('li')
          //       li.setAttribute('class', 'list-group-item border-2')
          //       li.textContent = local[i]
          //       modal.append(li)
          //   }
          // }
          
          
          
          
          // let count = 1
          // let category = ''
          
          
          
          
          // categoryBtn.forEach(item=>{
            
            //   item.addEventListener('click', ()=>{
              
              //     getData(item.dataset.key)
              
              //   })
              
              // })
              
              
              // async function getData(key='now_playing', page=1){
                //   category = key
                //         let data = await fetch(`https://api.themoviedb.org/3/movie/${key}?language=en-US&page=${page}`, {
                  
                  //         method: 'GET',
                  //         headers: {
                    //           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjY3YjYxMzMwMzliZjNmODdiZWM1OTI5OGZlYjkxMyIsInN1YiI6IjYzZWJjOTEyMWI3Mjk0MDBhYWI0YjI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3mAx7XEc6T_-zt8PI70tfRsdFDcn_AuYz2ijf5GLfWk'
//         }

//         })
//         let parseData = await data.json()
//         console.log(parseData.results);
//         render(parseData.results);


//   form.addEventListener('submit', function(e){
  //     e.preventDefault()
  //     if(select.value == 'a-z'){
    //       wrapper.innerHTML=null
    //       let sorted = parseData.results.sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    //       render(sorted)
    //     }
    
    
    // })
    
    
    // }
    
    // getData()
    
    
    
    // function render(arr){
      //   wrapper.innerHTML = null
      
      //   if(!arr.length){
        //       loader.classList.remove('d-none')
        //     return
        //     }
        
        
        
        //     for(let i=0; i<arr.length; i++){
          //       let local = JSON.parse(localStorage.getItem('data')) || []
          
          //       console.log(arr[i]);
          
          //       let card= document.createElement('div')
          //       card.setAttribute('class', 'card bg-danger')
          //       card.setAttribute('style', 'width: 24rem')
          
          //       card.innerHTML = `
          
          //       <img src="https://image.tmdb.org/t/p/w300/${arr[i].poster_path}" class="card-img-top" alt="...">
          //       <div class="card-body">
          //        <h5 class="text-warning card-title"><i class="fa-solid fa-code"></i> : ${arr[i].title}</h5>
//         <p class="text-warning card-text"><i class="fa-solid fa-pen"></i> : ${arr[i].overview}</p>
//         <p class="text-warning card-text"><i class="fa-solid fa-globe"></i> : ${arr[i].original_language}</p>
//         <p class="text-warning card-text"><i class="fa-solid fa-fire"></i> : ${arr[i].popularity}</p>
//         <p class="text-warning card-text"><i class="fa-regular fa-calendar-days"></i> : ${arr[i].release_date}</p>
//         <p class="text-warning card-text"><i class="fa-regular fa-eye"></i> : ${arr[i].vote_average}</p>
//         <p class="text-warning card-text"><i class="fa-solid fa-heart"></i> : ${arr[i].vote_count}</p>
//         <a href="#" class="btn btn-outline-warning">Go somewhere</a>
//         <button onclick="addLocal('${arr[i].title}')" class="btn btn-outline-warning">${local.includes(arr[i].title) ? 'Remove Library' : 'Add to Library' }</button>
//       </div>

//       `
//       wrapper.append(card)

//     }



// }

// localRender()







// next.addEventListener('click', ()=>{
  
  
  
  //   count+=1
  //   prevText.textContent = (count-1)
  //   nextText.textContent = (count+1)
  //   updatePage()
  //   getData(category, count)
  
  // })
  
  
  // function updatePage(){
    
    //   text.textContent = count
    
    // }
    
    // prev.addEventListener('click', ()=>{
      //   if(count == 1){
        //     return
        //   }
        
        //   count-=1
        //   prevText.textContent = (count-1)
        //   nextText.textContent = (count+1)
        //   updatePage()
        //   getData(category, count)
        
        // })
        
     

        
        
        
        
        
        
        
        
        
        let form = document.querySelecto('.form')
        
  
        
form.addEventListener('submit',()=>{
  alert('Login qildingiz')
})       