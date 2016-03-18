#!/usr/bin/perl 
#	 Nadimpally, Teja Pruthvi Varma account jadrn031
#    CS545 Fall 2015
#    proj-4
#
   
use DBI;


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "proj4";
my $username = "jadrn031";
my $password = "samovar";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT sku, category, title, short_description, long_description, cost, retail FROM products order by category");
$sth->execute();



$str = "";
while(my @row=$sth->fetchrow_array()) {
    foreach $item (@row) { 
        $str .= $item."|";
        }       
    $str .= ";";    
    }
 
print "Content-type:  text/html\n\n";
$sth->finish();
$dbh->disconnect();

    	
print $str;

