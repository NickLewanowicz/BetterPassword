import Controller from '@ember/controller';
import RandomController from '../../mixins/random-controller'
import DemoController from '../../mixins/demo-controller'

export default Controller.extend(DemoController, RandomController, {
    login: false,
    register: false,
    didRegister: false,

    actions: {
        //Will manage transitioning between 'random' routes
        accept () {
            this.set('register', false)
            this.set('selectedAdjective', null);
            this.set('selectedNoun', null);
            this.set('selectedVerb', null);
        },
        reg () {
            this.set('register', true)
            this.set('didRegister', true)
        },
        log () {
            this.set('login', true)
        },
        moveOn () {
            this.set('remainingAttempts', 3)
            this.set('register', false)
            this.set('loginSuccess', false)
            this.set('tryAgain', false)
            this.set('didRegister', false)
            this.set('login', false)
            this.set('selectedAdjective', null);
            this.set('selectedNoun', null);
            this.set('selectedVerb', null);
            this.transitionToRoute('index')

        }
    }
});
