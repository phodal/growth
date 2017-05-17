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
              'app': os.path.abspath('./android/app/build/outputs/apk/app-release.apk'),
              'platformName': 'Android',
              'deviceName': 'Nexus 6P API 25',
        })

    def tearDown(self):
        self.driver.quit()


class TestRouter(AppiumTest):

    def test_goto_discover_page(self):
        link = self.driver.find_element_by_xpath('//*[@text="探索"]')
        link.click()
        time.sleep(3)
        self.driver.find_element_by_xpath('//*[@text="在线资源"]')
