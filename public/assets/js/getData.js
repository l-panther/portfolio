$(document).ready(function () {

	/*
		constructor for class: id, title, type, image, features) 
	*/

  // Mission
	let mission = "";
	$.getJSON("assets/data/mission.json", function (result) {
		// For length of result, output content
		//console.log(result.length);
		for (var i = 0; i < result.length; i++) {
			mission += `
        <!-- Interest ` + result.id + ` -->
        
        <ion-grid class="mission">
          <ion-row>
            <ion-col size="12" size-lg="9">
             
              <p>` + result[i].description + `</p>  
            </ion-col>
            <ion-col size="12" size-lg="3" class="ion-align-content-center ion-text-center">
              <img src="assets/images/mission/` + result[i].image + `.png">
            </ion-col>
          </ion-row>
        </ion-grid>
                
      `;
		}
		// Insert output into html 
		$("#missionList").html(mission);
	});

	// Function to fetch data and render projects
    function renderProjects(url, containerId, fallbackMessage) {
        $.getJSON(url, function (result) {
            let content = "";
            
            // Check if the result contains data
            if (result.length > 0) {
                result.forEach(item => {
                    content += `
                    <article class="section project">
                      <div class="container">
                        <ion-grid>
                          <ion-row>
                            <ion-col size="12" size-md="5" size-lg="4">
                              <img src="assets/images/projects/${item.image}.png" alt="${item.name}">  
                            </ion-col>
                            <ion-col size="12" size-md="7" size-lg="8">
                              <h3>${item.name}</h3>
                                <p>${item.description}</p>
                                <button class="btn transparent-btn">View project</button>
                            </ion-col>
                          </ion-row>
                        </ion-grid>
                      </div>
                    </article>`;
                });
            } else {
                content += `<p class="empty-tab">${fallbackMessage}</p>`;
            }

            // Insert the generated HTML into the DOM
            $(`#${containerId}`).html(content);
        }).fail(function () {
            console.error(`Error loading data from ${url}`);
            $(`#${containerId}`).html(`
              <article class="section project">
                <div class="container">
                  <h3 class="ion-text-center error-message">
                    Software projects coming soon!
                  </h3>
                </div>
              </article>
            `);
        });
    }

    // Render Projects for different categories
    renderProjects("assets/data/websites.json", "websiteList", "Websites data is coming soon!");
    renderProjects("assets/data/mobile.json", "mobileList", "Mobile data is coming soon!");
    renderProjects("assets/data/software.json", "softwareList", "Software data is coming soon!");

});
