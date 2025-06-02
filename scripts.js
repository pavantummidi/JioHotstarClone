  // switching between sections
     function switchTosports(){
      document.getElementById("home").style.display = "none";
      document.getElementById("search").style.display = "none";
      document.getElementById("tv").style.display = "none";
      document.getElementById("sports").style.display = "block";
      document.getElementById("account").style.display = "none";
     }
     function switchTotv(){
      document.getElementById("home").style.display = "none";
      document.getElementById("search").style.display = "none";
      document.getElementById("tv").style.display = "block";
      document.getElementById("sports").style.display = "none";
      document.getElementById("account").style.display = "none";
     }
    function switchTosearch() {
  document.getElementById("home").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("tv").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("account").style.display = "none";
}
function switchTohome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("search").style.display = "none";
  document.getElementById("tv").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("account").style.display = "none";
}
function switchToaccount() {
   document.getElementById("home").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("tv").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("account").style.display = "block";
}



// image sources for recommendedimages
 const recommendedImages = {
            movie1: [
                { src: 'RR-vs-GT.png', alt: 'Recommended 1A' },
                { src: 'IPL-2025-Match-38-MI-vs-CSK.jpg', alt: 'Recommended 1A' },
                { src: 'rcssk.jpg', alt: 'Recommended 1A' },
                { src: 'delmi.jpg', alt: 'Recommended 1A' },
                { src: 'lsg_vs_pbks_dream11_prediction.jpg', alt: 'Recommended 1B' },
                { src: 'gtcsk.jpg', alt: 'Recommended 1C' },
                { src: 'lscsk.jpg', alt: 'Recommended 1D' }
            ],
            movie2: [
                { src: 'hanuman.jpg', alt: 'Recommended 2A' },
                { src: 'skanda.jpg', alt: 'Recommended 2B' },
                { src: 'liger.jpg', alt: 'Recommended 2C' },
                { src: 'blood.jpg', alt: 'Recommended 2C' },
                { src: 'vikram.jpg', alt: 'Recommended 2C' },
                { src: 'kok.jpg', alt: 'Recommended 2C' },
                { src: 'marco.jpg', alt: 'Recommended 2D' }
            ],
            movie3: [
                { src: 'banumathi.jpg', alt: 'Recommended 3A' },
                { src: 'intinti.jpg', alt: 'Recommended 3B' },
                { src: 'gudigantalu.jpg', alt: 'Recommended 3C' },
                { src: 'brahma.jpg', alt: 'Recommended 2C' },
                { src: 'mchinni.jpg', alt: 'Recommended 2C' },
                { src: 'illu.jpg', alt: 'Recommended 2C' },
                { src: 'maguvo.jpg', alt: 'Recommended 3D' }
            ],
            movie4: [
                { src: 'mad.jpg', alt: 'Recommended 4A' },
                { src: 'jathi.jpg', alt: 'Recommended 4B' },
                { src: 'veera.jpg', alt: 'Recommended 4C' },
                { src: 'dj.jpg', alt: 'Recommended 2C' },
                { src: 'baagi.jpg', alt: 'Recommended 2C' },
                { src: 'bp.jpg', alt: 'Recommended 2C' },
                { src: 'vr.jpg', alt: 'Recommended 4D' }
            ],
            movie5: [
                { src: 'dore.jpg', alt: 'Recommended 5A' },
                { src: 'hattori.jpg', alt: 'Recommended 5B' },
                { src: 'motu.jpg', alt: 'Recommended 5C' },
                { src: 'littl.jpg', alt: 'Recommended 2C' },
                { src: 'rollno.jpg', alt: 'Recommended 2C' },
                { src: 'gattu.jpg', alt: 'Recommended 2C' },
                { src: 'robo.jpg', alt: 'Recommended 5D' }
            ],
            movie6: [
                { src: 'predator.jpg', alt: 'Recommended 6A' },
                { src: 'primal.jpg', alt: 'Recommended 6B' },
                { src: 'beargills.jpg', alt: 'Recommended 6C' },
                  { src: 'wilsnak.jpg', alt: 'Recommended 6C' },
                    { src: 'wilmid.jpg', alt: 'Recommended 6C' },
                      { src: 'tsunami.jpg', alt: 'Recommended 6C' },
                { src: 'snainc.jpg', alt: 'Recommended 6D' }
            ],
          };


            // open model container by clicking watchnow button
            function openModal(title, description, imageSrc, movieId,videoUrl) {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modal-image');
            const modalTitle = document.getElementById('modal-title');
            const modalText = document.getElementById('modal-text');
            const modalWatchBtn = document.getElementById('modal-watch-btn');
            const recommendedContainer = document.getElementById('recommended-container');

            // Populate modal with main content
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalText.textContent = description;

             // Set Watch Now button onclick with videoUrl
            modalWatchBtn.onclick = () => openModalVideo(videoUrl);


            // Clear previous recommended images
            recommendedContainer.innerHTML = '';

            // Populate recommended images based on movieId
            const recommendations = recommendedImages[movieId] || [];
            recommendations.forEach(rec => {
                const card = document.createElement('div');
                card.className = 'recommended-card';
                card.innerHTML = `<img src="${rec.src}" alt="${rec.alt}">`;
                recommendedContainer.appendChild(card);
            });

            modal.style.display = 'block';
        }

     //open modelvideo container
        function openModalVideo(videoUrl) {
            const videoContainer = document.getElementById('video-container');
            const videoPlayer = document.getElementById('video-player');
            const modal = document.getElementById('modal');
          
            // Set video source
            videoPlayer.src = videoUrl || '';

            // Hide modal and show video container
            modal.style.display = 'none';
            videoContainer.style.display = 'block';

            //  sidebar is invisible when modelvideo is opened
            let ids=["all-sidebar","search-sidebar","tv-sidebar","sports-sidebar","account-sidebar"];
            for(let id of ids){
                let el = document.getElementById(id);
               el.style.visibility='hidden';
            }
           
        }

        function closeModalVideo() {
            const videoContainer = document.getElementById('video-container');
            const videoPlayer = document.getElementById('video-player');
            const modal = document.getElementById('modal');
         
            // Pause video and clear source
            videoPlayer.pause();
            videoPlayer.src = '';

            // Hide video container and show modal
            videoContainer.style.display = 'none';
            modal.style.display = 'block';


            //  sidebar is visible when modelvideo is closed
              let ids=["all-sidebar","search-sidebar","tv-sidebar","sports-sidebar","account-sidebar"];
            for(let id of ids){
                let el = document.getElementById(id);
               el.style.visibility='visible';
            }
         
        }



        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
              const modal = document.getElementById('modal');
            const videoContainer = document.getElementById('video-container');
            if (event.target === modal) {
                closeModal();
            } else if (event.target === videoContainer) {
                closeModalVideo();
            }
        }





         // Initialize localStorage for users if not exists
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        // Show login or register form
        function showLogin() {
            document.getElementById('login-box').style.display = 'block';
            document.getElementById('register-box').style.display = 'none';
            document.getElementById('error-message').style.display = 'none';
            // Clear login form fields
            document.getElementById('login-email').value = '';
            document.getElementById('login-password').value = '';
           document.body.style.overflow = 'hidden';
           document.getElementById('all-sidebar').style.opacity='0';
        }

        function showRegister() {
            document.getElementById('login-box').style.display = 'none';
            document.getElementById('register-box').style.display = 'block';
            document.getElementById('error-message').style.display = 'none';
            // Clear register form fields
            document.getElementById('register-username').value = '';
            document.getElementById('register-email').value = '';
            document.getElementById('register-password').value = '';
        document.body.style.overflow = 'hidden';
         document.getElementById('all-sidebar').style.opacity='0';

        }
         // authentication
        // Register new user
        function register() {
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            if (username && email && password) {
                const users = JSON.parse(localStorage.getItem('users'));
                const userExists = users.find(user => user.email === email);

                if (userExists) {
                    alert('Email already registered!');
                    return;
                }

                users.push({ username, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify({ username, email }));
                showJioHotstar();
            } else {
                alert('Please fill all fields');
            }
        }

        // Login existing user
        function login() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, email }));
                showJioHotstar();
            } else {
               
                document.getElementById('error-message').style.display = 'block';
            }
        }

        // Show JioHotstar clone
        function showJioHotstar() {
            document.getElementById('auth-page').style.display = 'none';
            document.getElementById('jiohotstar-clone').style.display = 'flex';
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                document.getElementById('username-display').textContent = currentUser.username;
            }
            switchTohome();
           document.body.style.overflow = 'auto';
          document.getElementById('all-sidebar').style.opacity='1';

        }

        // Logout
        function logout() {
            localStorage.removeItem('currentUser');
            document.getElementById('jiohotstar-clone').style.display = 'none';
            document.getElementById('auth-page').style.display = 'flex';
            document.getElementById('account').style.display = 'none';
            showLogin();
        }

     
        // Check if user is logged in on page load
        window.onload = function() {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                showJioHotstar();
            } else {
                document.getElementById('auth-page').style.display = 'flex';
                document.getElementById('jiohotstar-clone').style.display = 'none';
                showLogin();
            }
        };

