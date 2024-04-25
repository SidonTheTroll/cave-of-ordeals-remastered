window.onload = function() {
    var folderMenu = document.getElementById('folder-menu');
    fetchFolderContents('./folder') // Change 'folder' to the name of your folder
      .then(function(contents) {
        contents.forEach(function(item) {
          var link = document.createElement('a');
          link.textContent = item;
          link.href = './folder/' + item; // Change 'folder' to the name of your folder
          folderMenu.appendChild(link);
        });
      })
      .catch(function(error) {
        console.error('Error fetching folder contents:', error);
      });
  };
  
  // Function to fetch folder contents
  function fetchFolderContents(folderPath) {
    return fetch(folderPath)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to fetch folder contents');
        }
        return response.json(); // Assuming folder contents are provided as JSON
      });
  }
  