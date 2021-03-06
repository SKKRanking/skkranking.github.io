let paletteMap = {
  "4": "ffee2f",
  "4+": "ffd42a",
  "5": "ffb925",
  "5+": "ff9f1f",
  "6A": "ff841a",
  "6A+": "ff6a15",
  "6B": "ff4f10",
  "6B+": "ff350a",
  "6C": "ff1a05",
  "6C+": "ff0000",
  "7A": "F90225",
  "7A+": "F40449",
  "7B": "EE056E",
  "7B+": "E90792",
  "7C": "E309B7"
}

$.getJSON("lists.json", function(data) {
  let listPicker = $('#list-tab');
  let listViewer = $('#nav-tabContent');
                     
  $.each(data, function(key, val) {
    let lower = val.name.toLowerCase();
    
    listPicker
      .append('<a class="list-group-item list-group-item-action" id="list-' + lower + '-list" data-bs-toggle="list" href="#list-' + lower + '" role="tab" aria-controls="list-' + lower + '">' + val.name + '</a>');
    
    listViewer
      .append('<div class="tab-pane fade" id="list-' + lower + '" role="tabpanel" aria-labelledby="list-' + lower + '-list"></div>')
      .children()
      .last()
      .append('<ul class="list-group"></ul>');
    
    let listGroup = listViewer.children().last().children().last();
    
    for(problem of val.problems) {
      listGroup
        .append('<li class="list-group-item d-flex justify-content-between align-items-center">' + problem.name + '<span><small>' + problem.setter + ' </small><span class="badge rounded-pill" style="background-color: #' + paletteMap[problem.grade] + ';">' + problem.grade + '</span></span></li>');
    }
  });
});
