#!/usr/bin/python

from datetime import datetime;
from datetime import timedelta;
import os
import time

#Set the launch date to 8am on April 16;
launchDate = datetime(2018,4,16,14,0,0);

print("\nCounting down to: " + launchDate.strftime("%Y-%m-%d %H:%M:%S") + " UTC");

#launchDate = datetime.utcnow() + timedelta(seconds=5);

print("Amending date to: " + launchDate.strftime("%Y-%m-%d %H:%M:%S")+ " UTC" );


def publish():
	print("Publishing...")
	os.system("./publish")
	return;

while(True):

	curTime = datetime.utcnow()

	if (curTime > launchDate):
		print("Past the time: " + curTime.strftime("%Y-%m-%d %H:%M:%S"))
		publish();
		print("Exiting")
		exit(1);
	
	else:
		print(".")

	time.sleep(5)
