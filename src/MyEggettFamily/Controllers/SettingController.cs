using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Data;
using Domain.Model.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace MyEggettFamily.Controllers
{
    [Route("api/[controller]")]
    public class SettingController : BaseController
    {
        public SettingController(IDataAccess dal, IDataProtectionProvider provider) : base(dal, provider)
        {
            _dal = dal;
        }

        [HttpGet("[action]")]
        public IEnumerable<Setting> GetSettings()
        {
            return _dal.GetSettings();
        }

        [HttpGet("[action]")]
        public IEnumerable<Country> GetCountries()
        {
            return _dal.GetCountries();
        }

        [HttpGet("[action]")]
        public IEnumerable<State> GetStates()
        {
            return _dal.GetStates();
        }

        [HttpGet("[action]")]
        public Setting GetSetting(int settingId)
        {
            return _dal.GetSetting(settingId);
        }

        [HttpPost("[action]")]
        public Setting SaveSetting([FromBody]Setting setting)
        {
            _dal.InsertSetting(setting);
            return setting;
        }

        [HttpPost("[action]")]
        public Setting UpdateSetting([FromBody]Setting setting)
        {
            _dal.UpdateSetting(setting);
            return setting;
        }

        [HttpPost("[action]")]
        public SettingView UpdateSettings([FromBody]SettingView setting)
        {
            if (setting.image != "")
            {
                var header = _dal.GetSetting(setting.headerId);
                header.SettingValue = setting.image;
                _dal.UpdateSetting(header);
            }

            var codeSet = _dal.GetSetting(setting.codeId);
            codeSet.SettingValue = setting.code;
            _dal.UpdateSetting(codeSet);

            return setting;
        }

        [HttpGet("[action]")]
        public void DeleteSetting(int settingId)
        {
            _dal.DeleteSetting(settingId);
        }
    }
}
