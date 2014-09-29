var blogApp = angular.module('homeControllers',[]);


blogApp.controller('homeControllers', function homeControllers($scope) {
  $scope.oddposts = [
  {
    "title":"title of the post",
    "time":"24 sept, 14",
    "image_url":"image/p1.jpg",
    "description":"post details",
    "post_link":"www.google.com"
  },
  {
    "title":"title of the post",
    "time":"25 sept, 14",
    "image_url":"image/p2.jpg",
    "description":"about the post",
    "post_link":"www.google.com"
  },
  
  {
    "title":"title of the post",
    "time":"26 sept, 14",
    "image_url":"image/p3.jpg",
    "description":"encourage readers to keep coming back",
    "post_link":"htttp://www.google.com"
  }
];

 $scope.populerPosts = [
  {
    "title":"1.title",
    "time":"26 sept, 14",
    "image_url":"image/post.jpg",
    "description":"",
    "post_link":"www.google.com"
  },
  
  {
    "title":"title",
    "time":"24 sept, 14",
    "image_url":"image/post.jpg",
    "description":"",
    "post_link":"www.google.com"
  }
];
 $scope.bloggerProfile = [
  {
    "full_name":"Stu Smith..",
    "profile_photo":"image/me.jpg",
    "bio":"Hi I m xxxxx. I love food very much and I am interested to learn cooking and sharing my recipes.. :) ",
    "about": ":) I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
    "contact_description":"I'm always interested in connecting with innovative people. If you have a pitch, a book I may be interested in or simply want feedback on an venture – please fill out the following contact form and state the reason for contacting me in the message box.",
    "phoneNo":"8951xxxxxxxx",
    "email":"sutanushit@gmail.com",
    "facebook":"www.facebook.com",
    "twitter":"www.twitter.com",
    "gplus":"plus.google.com"
  }
];

});
