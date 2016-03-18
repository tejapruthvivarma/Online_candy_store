#!/usr/bin/perl  

use CGI;
use CGI::Cookie;
use DBI;


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn031";
my $username = "jadrn031";
my $password = "samovar";
my $database_source = "dbi:mysql:$database:$host:$port";

    
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';



$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn031',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);

my %cookies = $ENV{COOKIE};


print "<table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;

    

my $v = $q->cookie('jadrn031');
 
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $name, $qty , $price ) = split('\|',$row);
     
my $statement = "INSERT INTO sales VALUES('$sku','$qty');";
    
print "$name|";
print "$qty||";


my $sth = $dbh->prepare($statement);
$sth->execute();


    }    

    print "--";

my ($key, $value);

                
foreach $key ($q->param) {
    
    print "$key@";
    foreach $value ($q->param($key)) {
        print "$value@@";
        }
  
}


