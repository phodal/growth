# coding=utf-8
import os
import time
import unittest
from appium import webdriver


class AppiumTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Remote(
            command_executor='http://127.0.0.1:4723/wd/hub',
            desired_capabilities={
              'app': os.path.abspath('./ios/build/Build/Products/Release-iphonesimulator/growth.app'),
              'platformName': 'iOS',
              'platformVersion': '10.1',
              'deviceName': 'iPhone 6'
        })

    def tearDown(self):
        self.driver.quit()


class TestRouter(AppiumTest):

    def test_goto_discover_page(self):
        time.sleep(10)
        link = self.driver.find_element_by_xpath('//*[@text="探索"]')
        link.click()
        time.sleep(3)
        self.driver.find_element_by_xpath('//*[@text="在线资源"]')
