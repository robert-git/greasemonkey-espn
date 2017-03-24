// ==UserScript==
// @name        ESPN NBA standings - add back separator line
// @namespace   www.espn.com
// @description As of March 23, 2017, the ESPN NBA standings page no longer shows the separator line between playoff teams and non-playoff teams.  This adds it back.
// @include     http*://www.espn.com/nba/standings
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

"use strict";

var $jq311 = $.noConflict( true );

$jq311( document ).ready( function() {
        getrowsFor8thPlaceTeams().each( function() {
            $jq311( this ).children( "td" ).each( function() {
                     $jq311( this ).css( "border-bottom", "1pt solid black" );
                }
            );
        }
    );
});

function getrowsFor8thPlaceTeams() {
    return $jq311( document ).find( "table.standings tr:nth-child( 8 )" );
}
