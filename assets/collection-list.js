let viewSize = 1;

$(function () {
  //
  const activeView = localStorage.getItem("view");
  if (activeView) viewSize = parseInt(activeView);
  if (viewSize === 2) {
    $(".grid-item")
      .removeClass("col-6")
      .removeClass("col-12")
      .removeClass("col-4")
      .addClass("col-4");
  }

  if (viewSize === 3) {
    $(".grid-item")
      .removeClass("col-6")
      .removeClass("col-12")
      .removeClass("col-4")
      .addClass("col-3");
  }

  //
  $("#grid-slider").slider({
    value: viewSize,
    min: 1,
    max: 3,
    step: 1,
    change: function (e, ui) {
      let value = ui.value;
      viewSize = value;
      localStorage.setItem("view", value);

      if (value === 1) {
        $(".grid-item").each(function (index) {
          if (index + (1 % 7) === 0) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-4");
          }

          if (index + (1 % 7) === 1) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-12");
          }

          if (index + (1 % 7) === 2) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-6");
          }

          if (index + (1 % 7) === 3) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-6");
          }

          if (index + (1 % 7) === 4) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-12");
          }

          if (index + (1 % 7) === 5) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-4");
          }

          if (index + (1 % 7) === 6) {
            $(this)
              .removeClass("col-6")
              .removeClass("col-12")
              .removeClass("col-4")
              .addClass("col-4");
          }
        });
      }

      if (value === 2) {
        $(".grid-item")
          .removeClass("col-6")
          .removeClass("col-12")
          .removeClass("col-4")
          .addClass("col-4");
      }

      if (value === 3) {
        $(".grid-item")
          .removeClass("col-6")
          .removeClass("col-12")
          .removeClass("col-4")
          .addClass("col-3");
      }
    },
  });

  function gridChange(e, ui) {
    let value = ui.value;
    viewSize = value;
    localStorage.setItem("view", value);

    if (value === 1) {
      $(".grid-item").each(function (index) {
        if (index + (1 % 7) === 0) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }

        if (index + (1 % 7) === 1) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-12");
        }

        if (index + (1 % 7) === 2) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-6");
        }

        if (index + (1 % 7) === 3) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-6");
        }

        if (index + (1 % 7) === 4) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-12");
        }

        if (index + (1 % 7) === 5) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }

        if (index + (1 % 7) === 6) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }
      });
    }

    if (value === 2) {
      $(".grid-item")
        .removeClass("col-6")
        .removeClass("col-12")
        .removeClass("col-4")
        .addClass("col-4");
    }

    if (value === 3) {
      $(".grid-item")
        .removeClass("col-6")
        .removeClass("col-12")
        .removeClass("col-4")
        .addClass("col-3");
    }
  }

  $("#grid-slider").slider({
    value: viewSize,
    min: 1,
    max: 3,
    step: 1,
    change: gridChange,
  });

  $("#grid-slider-mobile").slider({
    value: viewSize,
    min: 1,
    max: 3,
    step: 1,
    change: gridChange,
  });

  $(".product-grid").infiniteScroll({
    path: ".pagination__item--prev",
    history: false,
    append: false,
  });

  $(".product-grid").on("load.infiniteScroll", function (event, response) {
    let $posts = $(response).find(".grid-item");

    if (viewSize === 1) {
      $posts.each(function (index) {
        if (index + (1 % 7) === 0) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }

        if (index + (1 % 7) === 1) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-12");
        }

        if (index + (1 % 7) === 2) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-6");
        }

        if (index + (1 % 7) === 3) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-6");
        }

        if (index + (1 % 7) === 4) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-12");
        }

        if (index + (1 % 7) === 5) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }

        if (index + (1 % 7) === 6) {
          $(this)
            .removeClass("col-6")
            .removeClass("col-12")
            .removeClass("col-4")
            .addClass("col-4");
        }
      });
    }

    if (viewSize === 2) {
      $posts
        .removeClass("col-6")
        .removeClass("col-12")
        .removeClass("col-4")
        .addClass("col-4");
    }

    if (viewSize === 3) {
      $posts
        .removeClass("col-6")
        .removeClass("col-12")
        .removeClass("col-4")
        .addClass("col-3");
    }

    $posts.imagesLoaded(function () {
      $(".product-grid").infiniteScroll("appendItems", $posts);
    });
  });

  //
  $(document).on("click", ".filter-item", function () {
    const currentState = $(this).find("input").prop("checked");
    const nextState = !currentState;
    if (nextState) {
      $(this).find("label").addClass("filter-active");
    }

    if (!nextState) {
      $(this).find("label").removeClass("filter-active");
    }

    $(this).find("input").prop("checked", !currentState);
  });

  $(document).on("click", ".show-more", function () {
    $(this).next().removeClass("list-hidden");
    $(this).remove();
  });
});
