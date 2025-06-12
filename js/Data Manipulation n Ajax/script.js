document.addEventListener('DOMContentLoaded',function(){
    const characterList=document.getElementById('characterList');

    function fetchData(){
        const apiUrl='https://swapi.dev/api/people/';

        fetch(apiUrl)
            .then(Response=>{
                if(!Response.ok){
                    throw new Error('HTTP Error! Status is :- ${reponse.status}');
                }
                return Response.json();
            })
            .then(data=>{
                const characters=data.results;
                displayCharacters(characters);
            })
            .catch(error=>{
                console.error('Fetch Error',error.message)
            });
    }

    function displayCharacters(characters){
        characterList.innerHTML='';

        characters.foreach(character=>{
            const listItem=document.createElement('li');
            listItem.textContent=`Name:-${character.name},Height:-${character.height} cm`;
            characterList.appendchild(listItem);
        });
    }

    fetchData();
});