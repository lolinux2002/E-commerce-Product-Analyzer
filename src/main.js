document.getElementById('analyzeForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('productUrl');
      const errorMessage = document.getElementById('errorMessage');
      
      if (!input.checkValidity()) {
        errorMessage.textContent = 'Please enter a valid URL';
        errorMessage.style.display = 'block';
        input.focus();
        return;
      }
      
      errorMessage.style.display = 'none';
      
      try {
        const response = await fetch('https://hook.eu2.make.com/e2jfj9kebkcqqcevlmbv68oa5aylsh4y', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: input.value
          })
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(`Server responded with ${response.status}: ${errorData}`);
        }

        console.log('URL sent successfully:', input.value);
      } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.style.display = 'block';
        console.error('Error:', error);
      }
    });
