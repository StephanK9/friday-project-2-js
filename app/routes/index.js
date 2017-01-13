import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Veruca Salt",
  content: "What are bees?",
  notes: "I need this question answered fast!"
}, {
  id: 2,
  author: "Mike TV",
  content: "What are elephants?",
  notes: "I need this question answered now!"
}, {
  id: 3,
  author: "Violet Beauregarde",
  content: "When does the eclipse happen?",
  notes: "I love space stuff!"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
