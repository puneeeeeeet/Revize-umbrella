const umbrellaImg = document.getElementById("umbrella-img");
      const logoUpload = document.getElementById("logo-upload");
      const logoPreview = document.getElementById("logo-preview");
      const colorButtons = document.querySelectorAll(".color-btn");
      const body = document.body;

      logoUpload.addEventListener("change", function () {
        const file = this.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
       
          umbrellaImg.classList.add("rotate");
          const reader = new FileReader();
          reader.onload = function (e) {
            setTimeout(() => {
              logoPreview.src = e.target.result;
              logoPreview.style.display = "block";
              umbrellaImg.classList.remove("rotate"); 
            }, 1000); 
          };
          reader.readAsDataURL(file);
        } else {
          alert("File must be under 5MB");
        }
      });

      colorButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const color = btn.dataset.color;
          umbrellaImg.src = `assets/umbrella_${color}.png`;
          body.className = `theme-${color}`;
        });
      });

    