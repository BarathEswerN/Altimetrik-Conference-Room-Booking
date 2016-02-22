altiApp.controller("bookingCtrl", function($scope, $state){
	$scope.username = "";
	$scope.meetingName = "";
	$scope.projectName = "";
	$scope.location= "";
	$scope.date = "12-Mar-2015";
	$scope.from = "1.30 pm";
	$scope.to = "2.30 pm";
	$scope.location = "Chennai-13th floor";
	$scope.chennai13rooms = [
						  {'date':'12-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'14-02-2016','from':'Ascendas 4th floor','to':'Plavanthangal','status':'Rejected','img':'img/cross.jpg'},
						  {'date':'17-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'12-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'14-02-2016','from':'Ascendas 4th floor','to':'Plavanthangal','status':'Rejected','img':'img/cross.jpg'},
						  {'date':'17-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Pending','img':'img/pending.jpg'}];
	console.log("entering bookingctrl");
	callDetails = function() {
		$state.go('details');
	}
	$(function () {
            var settings = {
                rows: 5,
                cols: 15,
                rowCssPrefix: 'row-',
                colCssPrefix: 'col-',
                seatWidth: 35,
                seatHeight: 35,
                seatCss: 'seat',
                selectedSeatCss: 'selectedSeat',
				selectingSeatCss: 'selectingSeat'
            };

            var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place').html(str.join(''));
            };

            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [5, 10, 25];
            init(bookedSeats);


            $('.' + settings.seatCss).click(function () {
			if ($(this).hasClass(settings.selectedSeatCss)){
				alert('This seat is already reserved');
			}
			else{
                $(this).toggleClass(settings.selectingSeatCss);
				}
            });

            $('#btnShow').click(function () {
                var str = [];
                $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
                    str.push($(this).attr('title'));
                });
                alert(str.join(','));
            })

            $('#btnShowNew').click(function () {
                var str = [], item;
                $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                    item = $(this).attr('title');                   
                    str.push(item);                   
                });
                alert(str.join(','));
            })
        });
});