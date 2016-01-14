

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
  this.initialize = function () {
    $("#enter").click(this.createRapName);
  }

  this.createRapName = function () {
    this.userName = $("#user-input").val().toString();
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
    var passwordPattern = /^[a-zA-Z]+$/;

    if (!(passwordPattern).test(this.userName) || this.userName.length == 0) {
      $(".alert-danger").show();
      $(".alert-success").hide();
    } else {
      $(".alert-danger").hide();
      if ((Math.floor(Math.random() * (2))) == 0) {
        var nameModifier = this.first_names[Math.floor(Math.random()*(this.first_names).length)];
        this.userName = nameModifier + ' ' + this.userName;
      } else {
        var nameModifier = this.last_names[Math.floor(Math.random()*(this.last_names).length)];
        this.userName = this.userName + ' ' + nameModifier;
      }
      $(".alert-success").html('<p>' + this.userName + '</p>');
      $(".alert-success").show();
    }
  }
}


$(document).ready(function() {

  engine = new Generator;
  engine.initialize();

});