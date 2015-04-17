import EmberSelectizeComponent from 'ember-cli-selectize/components/ember-selectize';

export default ;

import Ember from 'ember';
import computed from 'ember-new-computed';
var get = Ember.get, isArray = Ember.isArray, typeOf = Ember.typeOf,
  isNone = Ember.isNone, camelize = Ember.String.camelize;
  
export default EmberSelectizeComponent.extend({
  selectizeOptions: computed(function() {
    var allowCreate = this.get('create-item');

    //Split the passed in plugin config into an array.
    if (typeof this.plugins === 'string') {
      this.plugins = this.plugins === '' ? [] : this.plugins.split(', ').map(function(item) { return item.trim(); });
    }

    var options = {
      plugins: this.plugins,
      labelField: 'label',
      valueField: 'value',
      searchField: 'label',
      create: allowCreate ? Ember.run.bind(this, '_create') : false,
      onItemAdd: Ember.run.bind(this, '_onItemAdd'),
      onItemRemove: Ember.run.bind(this, '_onItemRemove'),
      onType: Ember.run.bind(this, '_onType'),
      render: this.get('renderOptions'),
      placeholder: this.get('placeholder')
    };

    var generalOptions = ['delimiter', 'diacritics', 'createOnBlur',
      'createFilter', 'highlight', 'persist', 'openOnFocus',
      'maxOptions', 'maxItems', 'hideSelected',
      'closeAfterSelect', 'allowEmptyOption',
      'scrollDuration', 'loadThrottle', 'preload',
      'dropdownParent', 'addPrecedence', 'selectOnTab'];

    generalOptions.forEach(Ember.run.bind(this, function(option) {
      options[option] = this.get(option);
    }));

    options.render = {
      option: function (data, escape) {
        return '<div class="option">' +
          '<span class="title" style="white-space:nowrap">😎™ ' + escape(data.label) + '</span>' +
          '</div>';
      }
    };

    options = this._mergeSortField(options);

    return options;
  })

});
