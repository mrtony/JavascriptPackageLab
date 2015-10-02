/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: false,
      displayHash: false,
      font: "normal 12pt Arial"
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: "metro"       // could be: "blackarrow" or "metro" or myTemplate (custom Template object)
  , orientation: "vertical-reverse"
  //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch( "master" );

// Commit on HEAD Branch which is "master"
master.commit( "Initial commit" );

// Add few commits on master.
master.commit( "My second commit" ).commit( "Add awesome feature" );


var develop = master.branch("develop"); // New branch from HEAD
var myfeature = develop.branch("myfeature"); // New branch from develop

develop.checkout();
develop.commit( "develop branch 1st commit" ).commit("develop branch 2nd commit");

myfeature.checkout();
myfeature.commit( "myfeature branch 1st commit" );

master.checkout();
master.commit("switch back to master");

develop.checkout();
develop.commit( "develop branch 3rd commit" ).commit("develop branch 4th commit");

myfeature.checkout();
myfeature.commit( "myfeature branch 2nd commit" );

/***********************
 *      CHECKOUT       *
 ***********************/

// Checkout on master branch for create "test" since master
//master.checkout();

/***********************
 *       DETAILS       *
 ***********************/


/***********************
 *    CUSTOMIZATION    *
 ***********************/


/***********************
 *       MERGES        *
 ***********************/
 //master.merge();
//master.checkout();
//master.merge(develop, "merge develop to master");
develop.merge(master, "merge develop to master");
