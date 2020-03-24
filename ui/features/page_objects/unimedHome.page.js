
class HomePage {
  constructor() {
    this.doctorGuideMenu = $$('.portlet').get(0);
  }

  accessDoctorGuideMenu() {
    return this.doctorGuideMenu.click();
  }
}
module.exports = new HomePage();
