import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ExampleDemo extends NavigationMixin (LightningElement ){
    //@track cisco;
    handleEvent(){
            // Navigate to a URL
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://quip.com/'
                }
            },
            //true // Replaces the current page in your browser history with the URL
          );
        }
    handleclick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://zoom.us/signin'
            }
        }
        //true // Replaces the current page in your browser history with the URL
      );
    }
    handleselect(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin'
            }
        }
        //true // Replaces the current page in your browser history with the URL
      );
    }
    handlepage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.webex.com/home3.html?at=6490-c'
            }
        }
        //true // Replaces the current page in your browser history with the URL
      );
    }
    navigatepage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://slack.com/intl/en-in/get-started#/createnew'
            }
        }
        //true // Replaces the current page in your browser history with the URL
      );
    }
    pagenavigation(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.wageworks.com/'
            }
        }
        //true // Replaces the current page in your browser history with the URL
      );
    }
    handlefooter(){

    }
}