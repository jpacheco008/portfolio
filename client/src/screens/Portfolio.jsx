import JuliosKitchen from "../assets/Julios-Kitchen.jpg";
import CoolRidings from "../assets/Cool-Ridings.jpg";
import CaffeineExplorer from "../assets/Caffeine-Explorer.jpg";
import FirstClass from "../assets/NCFirstClass_Logo-Variations-01.png";
import DoItRight from "../assets/Do_It_Right.jpg";
import Project from "../components/Project";
import ProjectPrivate from "../components/ProjectPrivate";
import SideNav from "../layouts/SideNav";

export default function Portfolio() {
  return (
    <div className="portfolio-screen">
      <SideNav />
      <div className="projects-container">
        <Project
          name="Do It Right"
          photo={DoItRight}
          overview="Do It Right is a chrome extension built for a Hackaton competion.
        The app gives you the true information of a restaurant while on
        websites like doordash to order from the small business directly.
        It was created with the help of UX designers, Data engineers and
        other software engineers."
          github="https://github.com/Rest4-Hackathon/Small-Biz-Rest"
          liveSite="https://chrome.google.com/webstore/detail/do-it-right/fologgfgadjcdjemgkohffpbbcegmipb"
        />
        <ProjectPrivate
          name="NC First Class"
          photo={FirstClass}
          overview="NC First Class is a freelance web store under construction. This store will
        have it's own database, user and admin authorization, order tracking and payment
        processing. This application uses Bootstrap, Javascript, React, Redux, Python, and
        Django REST API framework."
          liveSite="https://ncfirstclass.herokuapp.com"
        />
        <Project
          name="Caffeine Explorer"
          photo={CaffeineExplorer}
          overview="CAFFEINE EXPLORER is an app that allows the user to browse through a
        selection of fictional coffees generated with Fakker. The user will be
        able to make an account, and have more functionality available such as leaving
        a comment on a coffee and saving a favotire's list. This application uses CSS, Javascript, React,
        Ruby, and Ruby on Rails."
          github="https://github.com/jpacheco008/caffeine_explorer"
          liveSite="https://modest-tesla-2c628d.netlify.app"
        />
        <Project
          name="Cool Ridings"
          photo={CoolRidings}
          overview="This full stack app is a bike shop with front end and back end CRUD
        with authentification. Users with admin privileges will be able to
        add/delete items and edit items information. This app was created in
        colaboration with two other developers. The application uses CSS,
        Javascript, and React."
          github="https://github.com/jpacheco008/Cool-Ridings"
          liveSite="https://sleepy-lewin-9c4a68.netlify.app"
        />
        <Project
          name="Dominican Kitchen"
          photo={JuliosKitchen}
          overview="This React application allows the user to keep track of all the orders
        being placed by other users. The application uses HTML, CSS,
        Javascript, and Airtable for API calls."
          github="https://github.com/jpacheco008/julios-kitchen"
          liveSite="https://pensive-mayer-03c92a.netlify.app"
        />
      </div>
    </div>
  );
}
