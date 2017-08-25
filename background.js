//remote update
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  alert('BrowserAction');
 

   var options = {
      type: 'list',
      iconUrl: 'facebook.png',
      title: 'BrowserAction',
      //message: 'voilation',
      items: [{title:"#",message:"job"},{title:"#",message:"pharmacist"}]
    };
    chrome.notifications.create(options, function(){
      console.log("Notification Displayed");
    });
});

  
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
   
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
    }
    
    if (request.greeting == "voilations") {

      var voilatedWords = request.voilations;

       /*var options = {
        type: 'basic',
        title: 'Voilations Found !!!',        
        message: "voilatedWords",
        iconUrl: 'facebook.png'
      };*/
      var options = {
        type: 'list',
        title: 'Voilations Found !!!',        
        message: "voilatedWords",
        iconUrl: 'facebook.png',
        items: voilatedWords
      };
      chrome.notifications.create(options, function(){
        console.log("Notification Displayed");
      });
      sendResponse({farewell: "Notification Displayed"});
    }
      
 });

  