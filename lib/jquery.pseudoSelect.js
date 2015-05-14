/**
 * jquery.pseudoSelect.js 0.1
 *
 * MIT licensed
 *
 * https://github.com/denis-kalinichenko/pseudoSelect.js
 *
 * Created by Denis Kalinichenko on 5/14/2015.
 * d.kalinichenkooo@gmail.com
 */


$.fn.select = function() {

    /* declarations */
    var $select = $(this);
    var name = $select.data("name");
    var value = $select.find(".option.selected").data("value");
    $select.wrapInner('<div class="options"/>');
    var $options = $select.find(".options").addClass("hidden");
    $select.append('<input type="hidden" name="'+name+'" value="'+value+'"/>');
    var $input = $select.find("input");
    $select.prepend('<div class="option_selected">'+value+'</div>');
    var $option_selected = $select.find(".option_selected");

    /* events */
    $option_selected.unbind().click(function(event) {
        event.preventDefault();
        toggle();
    });
    $options.find(".option").unbind().click(function(event) {
        event.preventDefault();
        select($(this));
        toggle();
    });
    $(document).mouseup(function(e) {
        if(!$(e.target).parents(".select").find(".option").length) {
            hide();
        }
    });

    /* private functions */
    function select($option) {
        $option.addClass("selected").siblings().removeClass("selected");
        var value = $option.data("value");
        $input.val(value);
        $option_selected.html(value);
    }
    function toggle() {
        $options.toggleClass("hidden showed");
    }
    function hide() {
        $options.removeClass("showed").addClass("hidden");
    }
};