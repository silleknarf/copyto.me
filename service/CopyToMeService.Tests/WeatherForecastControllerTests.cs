using System.Linq;
using CopyToMeService.Controllers;
using NUnit.Framework;

namespace CopyToMeService.Tests
{
    public class WeatherForecastControllerTests
    {
        [Test]
        public void TestGetWeatherForecast()
        {
            var weatherForecastController = new WeatherForecastController(null);
            Assert.AreEqual(5, weatherForecastController.Get().Count());
        }
    }
}