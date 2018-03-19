using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ng_logging_aspnetcore_sample.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public HomeController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        [AllowAnonymous]
        [HttpGet("appsettings.json")]
        public async Task<IActionResult> GetClientAppSettings()
        {
            var settingsJson =
                await System.IO.File.ReadAllTextAsync(System.IO.Path.Combine(_hostingEnvironment.ContentRootPath,
                    "ClientApp", "appsettings.json"));
            var clientAppSettings = JsonConvert.DeserializeObject(settingsJson);
            return Json(clientAppSettings);
        }
    }
}
