import os
import time
from appium import webdriver

driver = webdriver.Remote(
    command_executor='http://127.0.0.1:4723/wd/hub',
    desired_capabilities={
        'app': os.path.expanduser('/Users/phodal/learn/growth-ng/android/app/build/outputs/apk/app-release.apk'),
        'platformName': 'Android',
        'deviceName': 'Google Nexus 5X - 7.0.0 - API 24 - 1080x1920',
    })

# wait for app to load
time.sleep(10)

# find the link with the text "Click here" and click on it
link = driver.find_element_by_xpath('//*[@text="探索"]')
link.click()

# wait for the next screen to load
time.sleep(10)

# make sure the correct "Success" result is on the page
driver.find_element_by_xpath('//*[@text="在线资源"]')

# important; you will not be able to launch again if this does not happen
driver.quit()
