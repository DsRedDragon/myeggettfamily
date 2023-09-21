using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Data;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace MyEggettFamily.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(IDataAccess dal, IDataProtectionProvider provider) : base(dal, provider)
        {
            
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
