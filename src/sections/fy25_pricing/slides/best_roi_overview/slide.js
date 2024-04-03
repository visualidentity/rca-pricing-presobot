new Slide({
  onRendered: function() {
    if (this.isMaster) {
      $subscriptionColumnBodyItems = this.$pageContainer.find(
        '.subscription-value__column__body__item'
      );
      $subscriptionColumnBodyItems.on('click', function() {
        var subslideAttr = $(this).attr('data-subslide');
        Bridge.Sub.show('subslide-' + subslideAttr);
      });

      $subscriptionModalContentItems = this.$pageContainer.find(
        '.subscription-value__modal__content__visual__navigation__button'
      );
      $subscriptionModalContentItems.on('click', function() {
        var subslideAttr = $(this).attr('data-subslide');
        Bridge.Sub.show('subslide-' + subslideAttr);
      });

      $subscriptionValueModalClose = this.$pageContainer.find(
        '.subscription-value__modal__close'
      );
      $subscriptionValueModalClose.on('click', function() {
        Bridge.Sub.show('subslide-1');
      });

      $modalVisualNavigation = this.$pageContainer.find(
        '.subscription-value__modal__content__visual__navigation__button'
      );
      $modalVisualNavigation.on('click', function() {
        var subslideAttr = $(this).attr('data-subslide');
        Bridge.Sub.show('subslide-' + subslideAttr);
      });

      if (this.modes.is('edit-mode')) {
        $itemTags = this.$pageContainer.find(
          '.subscription-value__column__body__item__tag'
        );
        $itemTitles = this.$pageContainer.find(
          '.subscription-value__column__body__item__title'
        );
        $itemTags.on('click', function(e) {
          e.stopPropagation();
        });
        $itemTitles.on('click', function(e) {
          e.stopPropagation();
        });
      }
    }
  },
  onReady: function() {}
});
