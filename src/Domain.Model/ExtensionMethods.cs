
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace DM
{
    /// <summary>
    /// Extension methods
    /// </summary>
    public static partial class ExtensionMethods
    {

        #region Event Extensions

        #region RaiseEvent
        public static void Raise<T>(this EventHandler<T> eventHandler, object sender, T e) where T : EventArgs
        {
            eventHandler?.Invoke(sender, e);
        }
        #endregion

        #endregion

        #region [ byte[] Extensions ]

        //#region ValueToString
        ///// <summary>
        ///// Returns the value of the byte array as a string.
        ///// </summary>
        ///// <param name="input">The input.</param>
        ///// <returns>result</returns>
        //public static string ValueToString(this byte[] input)
        //{
        //    return System.Text.Encoding.Default.GetString(input);
        //}
        //#endregion

        #endregion

        #region [ object Extensions ]

        //#region object.Decrypt
        ///// <summary>
        ///// Decrypts the specified item.
        ///// </summary>
        ///// <param name="item">The item.</param>
        ///// <returns></returns>
        //public static string Decrypt(this object item)
        //{
        //    SimpleEncryptionHandler eh = new SimpleEncryptionHandler();
        //    return eh.Decrypt(item.ToString());
        //}
        //#endregion

        //#region object.Encrypt
        ///// <summary>
        ///// Encrypts the specified item.
        ///// </summary>
        ///// <param name="item">The item.</param>
        ///// <returns></returns>
        //public static string Encrypt(this object item)
        //{
        //    SimpleEncryptionHandler eh = new SimpleEncryptionHandler();
        //    return eh.Encrypt(item.ToString());
        //}
        //#endregion

        #region object.SaveToFile
        /// <summary>
        /// Saves to file.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <param name="fileName">Name of the file.</param>
        /// <param name="overwriteIfExists">The overwrite if exists.</param>
        /// <returns></returns>
        public static bool SaveToFile(this object item, string fileName, bool overwriteIfExists = true)
        {
            bool result = true;
            FileInfo fi = new FileInfo(fileName);
            byte[] fileData = null;

            if (overwriteIfExists)
            {
                if (fi.Exists)
                {
                    fi.Delete();
                }
            }

            using (FileStream fileStream = fi.OpenWrite())
            {
                if (item is byte[])
                {
                    fileData = (byte[])item;
                }
                else if (item is string || item is StringBuilder || item is char[])
                {
                    fileData = item.ToString().ToByteArray();
                }
                else
                {
                    throw new ArgumentException("Item is of unsupported data type. Supported types are string, StringBuilder, char[] and byte[].", "item");
                }

                fileStream.Write(fileData, 0, fileData.Length);
                fileStream.Flush();
            }

            return result;
        }
        #endregion

        #region object.ToBool
        /// <summary>
        /// convert item to a bool, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>bool</returns>
        public static bool ToBool(this object item, bool defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                bool result;
                if (bool.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToBoolean(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to a bool
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>bool</returns>
        public static bool ToBool(this object item)
        {
            return item.ToBool(false);
        }
        #endregion

        #region object.ToDateTime
        /// <summary>
        /// Convert item to a DateTime, returning defaultValue if unable to convert.
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>DateTime</returns>
        public static DateTime ToDateTime(this object item, DateTime defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                DateTime result;
                if (DateTime.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToDateTime(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }

        /// <summary>
        /// convert item to a DateTime, returning DateTime.MinValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>DateTime</returns>
        public static DateTime ToDateTime(this object item)
        {
            return item.ToDateTime(DateTime.MinValue);
        }
        #endregion

        #region object.ToDecimal

        /// <summary>
        /// convert item to decimal, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>decimal</returns>
        public static decimal ToDecimal(this object item, decimal defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                decimal result;
                if (decimal.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToDecimal(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to decimal?, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>decimal?</returns>
        public static decimal? ToDecimal(this object item, decimal? defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                decimal result;
                if (decimal.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToDecimal(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to decimal
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>decimal</returns>
        public static decimal ToDecimal(this object item)
        {
            return item.ToDecimal(0M);
        }

        #endregion

        #region object.ToDouble
        /// <summary>
        /// convert item to double, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>double</returns>
        public static double ToDouble(this object item, double defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                double result;
                if (double.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToDouble(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to double?, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>double?</returns>
        public static double? ToDouble(this object item, double? defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                double result;
                if (double.TryParse((string)item, out result))
                    return result;
                else
                    return defaultValue;
            }
            else
            {
                try
                {
                    return Convert.ToDouble(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to double
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>double</returns>
        public static double ToDouble(this object item)
        {
            return item.ToDouble(0.0);
        }
        #endregion

        #region object.ToFloat
        /// <summary>
        /// convert item to float, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>float</returns>
        public static float ToFloat(this object item, float defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                float result;
                if (float.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToSingle(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to float
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>float</returns>
        public static float ToFloat(this object item)
        {
            return item.ToFloat(0.0F);
        }
        #endregion

        #region object.ToInt
        /// <summary>
        /// convert item to int, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>int</returns>
        public static int ToInt(this object item, int defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is string)
            {
                int result;
                if (int.TryParse((string)item, out result))
                {
                    return result;
                }
                else
                {
                    return defaultValue;
                }
            }
            else
            {
                try
                {
                    return Convert.ToInt32(item);
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// convert item to int
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>int</returns>
        public static int ToInt(this object item)
        {
            return item.ToInt(0);
        }
        #endregion

        #region object.ToGuid
        /// <summary>
        /// Convert item to Guid, returning defaultValue if unable to convert
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <param name="defaultValue">default value to return if unable to convert</param>
        /// <returns>Guid</returns>
        public static Guid ToGuid(this object item, Guid defaultValue)
        {
            if (item == null || item == DBNull.Value)
            {
                return defaultValue;
            }
            else if (item is Guid)
            {
                return (Guid)item;
            }
            else if (item is string)
            {
                return ((string)item).ToGuid();
            }
            else
            {
                try
                {
                    string result = item.ToString();
                    return result.ToGuid();
                }
                catch
                {
                    return defaultValue;
                }
            }
        }
        /// <summary>
        /// Convert item to Guid
        /// </summary>
        /// <param name="item">object to convert</param>
        /// <returns>Guid</returns>
        public static Guid ToGuid(this object item)
        {
            return item.ToGuid(Guid.Empty);
        }
        #endregion

        #region object.IsNull
        public static bool IsNull(this object source)
        {
            return source == null;
        }
        #endregion

        #region object.IsNotNull
        public static bool IsNotNull(this object source)
        {
            return !source.IsNull();
        }
        #endregion

        #endregion

        #region [ string Extensions ]

        #region string.FormatString
        public static string FormatString(this string format, params object[] args)
        {
            return string.Format(format, args);
        }
        #endregion

        //#region string.FromBase64
        ///// <summary>
        ///// Returns the string decoded from base64.
        ///// </summary>
        ///// <param name="input">The input.</param>
        ///// <returns></returns>
        //public static string FromBase64(this string input)
        //{
        //    byte[] encodedDataAsBytes = System.Convert.FromBase64String(input);
        //    return encodedDataAsBytes.ValueToString();
        //}
        //#endregion

        #region String.IsBlank
        public static bool IsBlank(this string theString)
        {
            return String.IsNullOrWhiteSpace(theString);
        }
        #endregion

        #region string.IsNotNullOrWhiteSpace
        /// <summary>
        /// Determines whether the specified input is not null or white space.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns>bool (result)</returns>
        public static bool IsNotNullOrWhiteSpace(this String input)
        {
            return !string.IsNullOrWhiteSpace(input);
        }
        #endregion

        #region string.IsNullOrWhiteSpace
        /// <summary>
        /// Determines whether the specified input is null or white space.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns>bool (result)</returns>
        public static bool IsNullOrWhiteSpace(this String input)
        {
            return string.IsNullOrWhiteSpace(input);
        }
        #endregion

        #region string.IsNumeric
        /// <summary>
        /// Determines whether the specified input is numeric.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <returns>result</returns>
        public static bool IsNumeric(this String input)
        {
            float output;
            return float.TryParse(input, out output);
        }
        #endregion

        #region string.IsValidEmailAddress
        /// <summary>
        /// Test if the string is a Valid Email Address
        /// </summary>
        /// <param name="s">String to test</param>
        /// <param name="RegexToUse">Optional: Regular Expression to validate against.</param>
        /// <returns></returns>
        public static bool IsValidEmailAddress(this String s, string RegexToUse = "")
        {
            bool rslt = true;

            string RegexStr = String.Empty;

            if (String.IsNullOrEmpty(RegexToUse))
            {
                RegexStr = @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$";
            }
            else
            {
                RegexStr = RegexToUse;
            }
            Regex regex = new Regex(RegexStr);
            Match match = regex.Match(s);
            if (match.Success)
            {
                // Attempt to create a .Net MailAddress object.
                try
                {
                    //System.Net.Mail.MailAddress addr = new System.Net.Mail.MailAddress(s);

                    s = null; // Dispose of the object. Since we are just using it for a second test and dont need it make sure its not going to take up any memory 
                }
                catch
                {
                    rslt = false;
                }
            }
            else
            {
                rslt = false;
            }

            return rslt;
        }
        #endregion

        #region string.Match
        public static bool Match(this string value, string pattern)
        {
            Regex regex = new Regex(pattern);
            return regex.IsMatch(value);
        }
        #endregion

        #region string.ToAlphaOnly
        /// <summary>
        /// Returns alpha only characters from input.
        /// Includes spaces.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <returns>result</returns>
        public static string ToAlphaOnly(this String input)
        {
            string result = string.Empty;

            if (!string.IsNullOrEmpty(input))
            {
                var q = from c in input.ToCharArray()
                        where char.IsLetter(c) || c == ' '
                        select c;
                result = new string(q.ToArray<char>());
            }

            return result;
        }

        /// <summary>
        /// Returns alpha only characters from input.
        /// You specify whether to include spaces.
        /// </summary>
        /// <param name="input">input string</param>
        /// <param name="includeSpace">include spaces as alpha?</param>
        /// <returns>result</returns>
        public static string ToAlphaOnly(this String input, bool includeSpace)
        {
            string result = string.Empty;

            if (!string.IsNullOrEmpty(input))
            {
                if (!includeSpace)
                {
                    var q = from c in input.ToCharArray()
                            where char.IsLetter(c)
                            select c;
                    result = new string(q.ToArray<char>());
                }
                else
                {
                    result = ToAlphaOnly(input);
                }
            }

            return result;
        }
        #endregion

        #region string.ToBase64
        /// <summary>
        /// Toes the base64.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        static public string ToBase64(this string input)
        {
            return System.Convert.ToBase64String(input.ToByteArray());
        }
        #endregion

        #region string.ToByteArray
        /// <summary>
        /// Returns the string as a byte[].
        /// </summary>
        /// <param name="input">Input string</param>
        /// <returns>result</returns>
        public static byte[] ToByteArray(this String input)
        {
            System.Text.UTF8Encoding encoding = new System.Text.UTF8Encoding();
            return encoding.GetBytes(input);
        }
        #endregion

        #region string.ToDecimal
        /// <summary>
        /// Attempts to convert the string to a decimal
        /// </summary>
        /// <param name="s">System.String to process</param>
        /// <returns>double (returns 0 if no decimal value is available)</returns>
        public static decimal ToDecimal(this String s)
        {
            decimal test = 0;

            if (!decimal.TryParse(s.ToNumbersOnly(true), out test))
                return 0;

            return test;
        }
        #endregion

        #region string.ToGuid
        /// <summary>
        /// Attempts to convert input to a Guid, defaulting to Guid.Empty if unsuccessful.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <returns>Guid, Guid.Empty if unsuccessful</returns>
        public static Guid ToGuid(this String input)
        {
            Guid result = Guid.Empty;

            if (!string.IsNullOrWhiteSpace(input))
            {
                try
                {
                    result = new Guid(input);
                }
                catch (FormatException)
                {
                    result = Guid.Empty;
                }
            }

            return result;
        }
        #endregion

        #region string.ToInt
        /// <summary>
        /// Attempts to convert input to an integer, defaulting to 0 if unsuccessful.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <returns>int, 0 if unsuccessful</returns>
        public static int ToInt(this String input)
        {
            if (!String.IsNullOrEmpty(input))
            {
                int result = 0;

                // Check for a decimal place. If there is one there then 
                // ignore everything to the right of the decimal place. 

                if (input.IndexOf('.') > 0)
                {
                    input = input.Substring(0, input.IndexOf('.'));
                }

                if (!string.IsNullOrWhiteSpace(input))
                {
                    bool isNegative = input.StartsWith("-", StringComparison.CurrentCulture);
                    int.TryParse(input.ToNumbersOnly(), out result);
                    return isNegative ? result * -1 : result;
                }

                return result;
            }
            else
            {
                return 0;
            }
        }

        #endregion

        #region string.ToNumbersOnly
        /// <summary>
        /// Returns numeric values from input.
        /// Excludes the decimal character.
        /// </summary>
        /// <param name="input">Input string.</param>
        /// <returns>result</returns>
        public static string ToNumbersOnly(this String input)
        {
            string result = string.Empty;

            if (!string.IsNullOrWhiteSpace(input))
            {
                var q = from c in input.ToCharArray()
                        where char.IsNumber(c)
                        select c;

                result = new string(q.ToArray<char>());
            }

            return result;
        }
        /// <summary>
        /// Returns numeric values from input.
        /// You specify whether to allow the decimal character.
        /// </summary>
        /// <param name="input">input string</param>
        /// <param name="allowDecimalCharacter">allow periods as part of the return value</param>
        /// <returns>result</returns>
        public static string ToNumbersOnly(this String input, bool allowDecimalCharacter)
        {
            string result = string.Empty;

            if (!string.IsNullOrWhiteSpace(input))
            {
                if (allowDecimalCharacter)
                {
                    var q = from c in input.ToCharArray()
                            where char.IsNumber(c) || c == '.'
                            select c;
                    result = new string(q.ToArray<char>());
                }
                else
                {
                    result = input.ToNumbersOnly();
                }
            }

            return result;
        }
        #endregion

        #region string.ToFormattedPhone
        /// <summary>
        /// returns a formatted phone number
        /// </summary>
        /// <param name="UnformattedPhoneNumber">unformatted phone number</param>
        /// <returns></returns>
        public static string ToFormattedPhone(this String UnformattedPhoneNumber)
        {
            StringBuilder sb = new StringBuilder();
            UnformattedPhoneNumber = UnformattedPhoneNumber.ToNumbersOnly();

            if (!String.IsNullOrEmpty(UnformattedPhoneNumber))
            {
                if (UnformattedPhoneNumber.Substring(0, 1) == "1")
                {
                    UnformattedPhoneNumber = UnformattedPhoneNumber.Substring(1, UnformattedPhoneNumber.Length - 1);
                }

                if (UnformattedPhoneNumber.Length > 10)
                {
                    sb.AppendFormat(
                        "({0}) {1}-{2} ex. {3}",
                        UnformattedPhoneNumber.Substring(0, 3),
                        UnformattedPhoneNumber.Substring(3, 3),
                        UnformattedPhoneNumber.Substring(6, 4),
                        UnformattedPhoneNumber.Substring(10));
                }
                else if (UnformattedPhoneNumber.Length == 10)
                {
                    sb.AppendFormat(
                        "({0}) {1}-{2}",
                        UnformattedPhoneNumber.Substring(0, 3),
                        UnformattedPhoneNumber.Substring(3, 3),
                        UnformattedPhoneNumber.Substring(6, 4));
                }
                else
                    sb.Append(UnformattedPhoneNumber);
            }
            return sb.ToString();

        }
        #endregion

        #endregion

    }
}