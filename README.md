 # Tech Tinder app
 
This is a personal project to play with react-native. I had lots of different ideas for this but the one that stuck was a swipe game for tech stack.
 
I'm quite chuffed at how it turned out. Like every project there is so much more I'd like to do with it but it totally did what I was aiming for. 
 
## Preview: 
![](https://i.imgur.com/HFEpf0A.png)
![](https://i.imgur.com/xG6VFl5.png)
 
 
## What I learned:

### It's the circle of life 
Diving into lifecycle methods was interesting. I mainly code in hooks but classes were where I needed to be for the functionality I wanted. 

   ![](https://i.imgur.com/ly4Sduc.png)
   
   ![](https://i.imgur.com/Qonc08Q.png)
   
The Animated library (a godsend) made animations fluid, powerful, and painless to build and maintain. The main focus is on declarative relationships between inputs and outputs, with configurable transforms in between, and start/stop methods to control time-based animation execution. 



  
  ![](https://i.imgur.com/gFg4zzi.png)

PanResponder reconciles several touches into a single gesture. Like need, I say more!!!


  
### We really are building on houses of cards: 
#### Incompatibility hell, ad-hock issues. trailing through StackOverflow. 
 
 Time and time again I had compatibility issues, from installing, I took a whirl with react-native CLI initially but because Ubuntu hasn't the right driver for my phone (it was a saga), I could only test on android studios which I wasn't happy about  so I did a restart or rather a couple with expo, it, however, had a lot of issues with the packages I had been using so I went back to scratch and away from maps. 

Once I got in my stride all was well until I wanted to do some End-to-End testing and it was one CLI (Detox vs Appium)too many for me so I only have Snapshots for testing which I must come back and do something about! Future me to the rescue. 

Finally it came to publishing and I ended up having to do a few hacky things because Both Expo Optimize and Expo Publish fails due to wrong “sharp” version and its main issue was "Warning "root" does not have permission to access the dev dir" as one of the expo dependencies I needed to use for optimizing my images was incompatible with the version of node I was running. 

![](https://i.imgur.com/6zV4dQE.png)


But we did get published!! 

![](https://i.imgur.com/A8QwP1m.png)

Not very exciting but it's there https://expo.io/@dubhcait/techtinder

Version 2 will be even prettier! 
![](https://i.imgur.com/5hhnnhe.png)
